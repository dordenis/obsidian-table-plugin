
export interface PluginSettings {
	lengthChange: boolean;
	searching: boolean;
	paging: boolean;
	ordering: boolean;
	info: boolean;
	orderMulti: boolean;
}

export const DEFAULT_SETTINGS: Partial<PluginSettings> = {
	lengthChange: true,
	searching: true,
	paging: true,
	ordering: true,
	info: false,
	orderMulti: false,
};
