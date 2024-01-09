export interface PluginSettings {
	lengthChange: boolean;
	pageLength: string;
	searching: boolean;
	paging: boolean;
	ordering: boolean;
	info: boolean;
}

export const DEFAULT_SETTINGS: Partial<PluginSettings> = {
	lengthChange: true,
	pageLength: '2',
	searching: true,
	paging: true,
	ordering: true,
	info: true,
};
