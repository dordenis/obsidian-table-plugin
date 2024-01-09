import {Plugin, WorkspaceLeaf} from "obsidian";
import { onHeadClick } from "./sortable";

export default class ExamplePlugin extends Plugin {

	onload() {
		this.registerDomEvent(window, "click", (ev: MouseEvent) => onHeadClick(ev));
	}

	onunload() {

	}

}
