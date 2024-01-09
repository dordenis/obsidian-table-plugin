import {Plugin, WorkspaceLeaf} from "obsidian";
import { onHeadClick } from "./sortable";
import "node_modules/datatables.net-dt/css/jquery.dataTables.css";

export default class ExamplePlugin extends Plugin {

	onload() {
		this.registerDomEvent(window, "click", (ev: MouseEvent) => onHeadClick(ev));
	}

	onunload() {

	}

}
