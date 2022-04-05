// Interface to define our Todo model on the frontend
export interface IDuty {
	_id?: number
	type: number,
	expansion: number,
	name: string,
	abbreviation: string
}