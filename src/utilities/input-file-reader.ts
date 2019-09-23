export class InputFileReader {
  public async loadFileAsync(file: File): Promise<string> {
    const result = new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsText(file);
    });

    return result;
  }

  public clearLoad(load: HTMLInputElement) {
    try {
      load.value = '';
      if (load.value) {
        load.type = 'text';
        load.type = 'file';
      }
      // tslint:disable-next-line:no-empty
    } catch (e) {}
  }
}
