import DataTable from "datatables.net";

function shouldSort(htmlEl: HTMLElement): boolean {
	// dataview table: parent must be a "dataview" HTMLTableElement
	const p = htmlEl.matchParent(".dataview");
	if (p instanceof HTMLTableElement) return true;

	// reading mode, i.e. non-editing
	return null !== htmlEl.matchParent(".markdown-reading-view");
}

export function onHeadClick(evt: MouseEvent): void {
	// check if the clicked element is a table header
	const htmlEl = <HTMLElement>evt.target;

	if (!shouldSort(htmlEl)) {
		return;
	}

	const table = <HTMLTableElement>htmlEl.closest("table");

	if (table === null || table.hasClass("dataTable")) {
		return;
	}

	const table2 = table.cloneNode();

	const t = new DataTable(table, {
		lengthChange: true,
		pageLength: 50
	});

	//const tt = <Node>t.table().container().parentNode;
	//tt.empty();
	//tt.appendChild(table);

}
