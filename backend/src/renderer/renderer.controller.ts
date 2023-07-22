import { Body, Controller, Post } from '@nestjs/common';
import { RenderTemplateDto } from 'src/renderer/dto/render-template.dto';
import { RendererService } from 'src/renderer/renderer.service';

@Controller('render')
export class RendererController {
  constructor(private readonly rendererService: RendererService) {}

  @Post('template/')
  renderVideo(@Body() renderTemplateDto: RenderTemplateDto) {
    return this.rendererService.renderTemplate(renderTemplateDto);
  }
}
