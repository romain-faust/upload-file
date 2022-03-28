import type { Observable } from 'rxjs'

export interface UploadFile {
	(path: string, data: ArrayBuffer): Observable<UploadFileSnapshot>
}

export interface UploadFileSnapshot {
	readonly bytesTransferred: number
	readonly downloadURL?: string
	readonly totalBytes: number
}
