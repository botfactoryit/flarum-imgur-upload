import SettingsModal from 'flarum/components/SettingsModal';

export default class ImgurUploadSettingsModal extends SettingsModal {
	className() {
		return 'ImgurUploadSettingsModal Modal--small';
	}

	title() {
		return app.translator.trans('botfactory-imgur-upload.admin.settings.title');
	}

	form() {
		return [
			<div className="Form-group">
				<label>Imgur Client ID (OAuth {app.translator.trans('matpompili-imgur-upload.admin.without')} callback)
				- <a href="https://api.imgur.com/oauth2/addclient"><small>{app.translator.trans('matpompili-imgur-upload.admin.get-id')}</small></a></label>
				<input className="FormControl" bidi={this.setting('matpompili.imgur-upload.clientID')}/>
			</div>,
			<p>{app.translator.trans('matpompili-imgur-upload.admin.leaveEmpty')}</p>,
			<div className="Form-group">
				<label>{app.translator.trans('matpompili-imgur-upload.admin.maxImageWidth')}</label>
				<input className="FormControl" bidi={this.setting('matpompili.imgur-upload.maxImageWidth')}/>
				<label>{app.translator.trans('matpompili-imgur-upload.admin.maxImageHeight')}</label>
				<input className="FormControl" bidi={this.setting('matpompili.imgur-upload.maxImageHeight')}/>
			</div>
		];
	}
}
