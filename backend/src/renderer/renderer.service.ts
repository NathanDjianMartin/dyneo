import { Injectable } from '@nestjs/common';
import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia } from '@remotion/renderer';

@Injectable()
export class RendererService {
  async render(template: string) {
    try {
      const bundleLocation = await bundle({
        entryPoint: `../${template}/src/index.ts`,
      });
      const compositionId = 'FullComposition';
      const allCompositions = await getCompositions(bundleLocation);

      const composition = allCompositions.find((c) => c.id === compositionId);

      if (!composition) {
        throw new Error(`No composition with the ID ${compositionId} found.`);
      }

      await renderMedia({
        composition,
        serveUrl: bundleLocation,
        codec: 'h264',
        outputLocation: `out/${template}.mp4`,
        inputProps: {},
      });

      return composition;
    } catch (error: unknown) {
      return error;
    }
  }
}
