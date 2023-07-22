import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { bundle } from '@remotion/bundler';
import { getCompositions, renderMedia } from '@remotion/renderer';
import { RenderTemplateDto } from 'src/renderer/dto/render-template.dto';
import * as fs from 'fs';

@Injectable()
export class RendererService {
  async renderTemplate(renderTemplateDto: RenderTemplateDto) {
    const { template, inputProps } = renderTemplateDto;

    const path = `../${template}/src/index.ts`;
    const templateExists = fs.existsSync(path);

    if (!templateExists) {
      throw new HttpException(
        `No template found with the name '${template}'`,
        HttpStatus.NOT_FOUND,
      );
    }

    const bundleLocation = await bundle({
      entryPoint: path,
    });

    if (!bundleLocation) {
      throw new HttpException(
        'An error occured while bundling the template',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    const compositionId = 'FullComposition';
    const allCompositions = await getCompositions(bundleLocation);

    const composition = allCompositions.find((c) => c.id === compositionId);

    if (!composition) {
      throw new HttpException(
        `No composition with the ID ${compositionId} found.`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    renderMedia({
      composition,
      serveUrl: bundleLocation,
      codec: 'h264',
      outputLocation: `out/${template}.mp4`,
      inputProps,
    });

    return `Started render of ${template}`;
  }
}
