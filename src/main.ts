import {Plugin} from "obsidian";
import {Render} from "./sortable";
import "node_modules/datatables.net-dt/css/jquery.dataTables.css";

import {DEFAULT_SETTINGS, PluginSettings} from "./settings";
import {PluginSettingsTab} from "./settingsTab";
import {Russian} from "./i18n/russian";

export default class TablePlugin extends Plugin {
	render: Render
	settings: PluginSettings;

	async onload() {
		await this.loadSettings();

		this.render = new Render()
		this.render.settings = this.settings

		this.registerDomEvent(window, "click", (ev: MouseEvent) => this.render.table(ev));
		this.addSettingTab(new PluginSettingsTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
		//this.settings.language = Russian
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.render.update()
	}

}
