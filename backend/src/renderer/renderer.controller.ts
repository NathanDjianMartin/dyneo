import { Controller, Param, Post } from '@nestjs/common';
import { RendererService } from 'src/renderer/renderer.service';

@Controller('renderer')
export class RendererController {
  constructor(private readonly rendererService: RendererService) {}

  @Post('template/:template')
  renderVideo(@Param('template') template: string) {
    return this.rendererService.render(template);
  }
}
