import {Plugin} from "obsidian";
import {Render} from "./sortable";
import "node_modules/datatables.net-dt/css/jquery.dataTables.css";

import {DEFAULT_SETTINGS, PluginSettings} from "./settings";
import {PluginSettingsTab} from "./settingsTab";

export default class TablePlugin extends Plugin {
	render: Render
	settings: PluginSettings;

	async onload() {
		this.render = new Render()

		await this.loadSettings();

		this.registerDomEvent(window, "click", (ev: MouseEvent) => this.render.table(ev));

		this.addSettingTab(new PluginSettingsTab(this.app, this));
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.render.settings = this.settings
		this.render.update()
	}

}
