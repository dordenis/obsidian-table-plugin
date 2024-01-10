
export interface PluginSettings {
	lengthChange: boolean;
	pageLength: string;
	searching: boolean;
	paging: boolean;
	ordering: boolean;
	info: boolean;
	orderMulti: boolean;
}

export const DEFAULT_SETTINGS: Partial<PluginSettings> = {
	lengthChange: false,
	pageLength: "25",
	searching: false,
	paging: true,
	ordering: true,
	info: true,
	orderMulti: true,
};
