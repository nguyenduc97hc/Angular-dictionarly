import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: IWord[] = [
    {key: 'service', meaning: 'dịch vụ'},
    {key: 'service provider', meaning: 'nhà cung cấp dịch vụ'},
    {key: 'provide', meaning: 'cung cấp'},
    {key: 'efficient', meaning: 'hiệu quả'},
    {key: 'snow', meaning: 'tuyết'},
    {key: 'layout', meaning: 'Bố trí'},
    {key: 'grid', meaning: 'Lưới'},
    {key: 'dictionary', meaning: 'Tử điển'},
    {key: 'computer', meaning: 'máy tính'}
  ];

  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }

  constructor() {
  }
  getAll(): IWord[] {
    return this.words;
  }
}

export interface IWord {
  key: string;
  meaning: string;
}

