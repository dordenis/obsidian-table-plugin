import DataTable from "datatables.net-dt";
import {DEFAULT_SETTINGS, PluginSettings} from "./settings";

export class Render {
	public settings: Object;
	public tableStates = new Map();

	private shouldSort(htmlEl: HTMLElement): boolean {
		// dataview table: parent must be a "dataview" HTMLTableElement
		const p = htmlEl.matchParent(".dataview");
		if (p instanceof HTMLTableElement) return true;

		// reading mode, i.e. non-editing
		return null !== htmlEl.matchParent(".markdown-reading-view");
	}

	public table(evt: MouseEvent): void {
		const htmlEl = <HTMLElement>evt.target;

		if (!this.shouldSort(htmlEl)) {
			return;
		}

		const el = htmlEl.closest("table");
		if (el === null || el.hasClass("dataTable")) {
			return;
		}

		const table = new DataTable(el, this.settings);
		this.tableStates.set(el, table)
	}

	public update(): void
	{
		this.tableStates.forEach(table => {
			table.destroy()
		})

		this.tableStates.clear()
	}

}



