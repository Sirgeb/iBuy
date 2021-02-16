import { Inject, Injectable } from '@nestjs/common';
import cloudinary from 'cloudinary';
import { CONFIG_OPTIONS } from 'src/common/common.constants';
import { UploadsModuleOptions } from './upload.interfaces';

@Injectable()
export class UploadsService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: UploadsModuleOptions
  ){}

  async upload (image: string) {
    const res = await cloudinary.v2.uploader.upload(image, {
      api_key: this.options.apiKey,
      api_secret: this.options.apiSecret,
      cloud_name: this.options.cloudName,
      folder: "iBuy_Assets/"
    });

    return res.secure_url;
  }
}
