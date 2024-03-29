import { App, PluginSettingTab, Setting } from "obsidian";
import TablePlugin from "./main";

export class PluginSettingsTab extends PluginSettingTab {
	plugin: TablePlugin;

	constructor(app: App, plugin: TablePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;

		containerEl.empty();

		containerEl.createEl("h2", { text: "Perfect table settings" });


		new Setting(containerEl)
			.setName("Pagination")
			.setDesc("Enable or disable table pagination.")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.paging)
					.onChange(async (value) => {
						this.plugin.settings.paging = value;
						await this.plugin.saveSettings();
					})
			);

		/*new Setting(containerEl)
			.setName("Page length")
			.setDesc("Change the initial page length (number of rows per page).")
			.addText((value) => value
				.setValue(this.plugin.settings.pageLength.toString())
				.onChange(async (value) => {
					this.plugin.settings.pageLength = value
					await this.plugin.saveSettings()
				})
			);*/

		new Setting(containerEl)
			.setName("length change")
			.setDesc("Feature control the end user's ability to change the paging display length of the table.")
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.lengthChange)
				.onChange(async (value) => {
					this.plugin.settings.lengthChange = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName("Searching")
			.setDesc("Set filtering options.")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.searching)
					.onChange(async (value) => {
						this.plugin.settings.searching = value;
						await this.plugin.saveSettings();
					})
			);


		new Setting(containerEl)
			.setName("Ordering")
			.setDesc("Feature control ordering (sorting) abilities")
			.addToggle((toggle) =>
				toggle
					.setValue(this.plugin.settings.ordering)
					.onChange(async (value) => {
						this.plugin.settings.ordering = value;
						await this.plugin.saveSettings();
					})
			);

		new Setting(containerEl)
			.setName("Multi ordering")
			.setDesc("Multiple column ordering ability control (activated by shift-click by the user).")
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.orderMulti)
				.onChange(async (value) => {
					this.plugin.settings.orderMulti = value;
					await this.plugin.saveSettings();
				})
			);

		new Setting(containerEl)
			.setName("Information field")
			.setDesc("Feature control table information display field.")
			.addToggle((toggle) => toggle
				.setValue(this.plugin.settings.info)
				.onChange(async (value) => {
					this.plugin.settings.info = value;
					await this.plugin.saveSettings();
				})
			);



	}
}
