import { IsNotEmpty, IsObject, IsString } from 'class-validator';

export class RenderTemplateDto {
  @IsString()
  @IsNotEmpty()
  template: string;
  @IsObject()
  inputProps: Record<string, unknown>;
}
