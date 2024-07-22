# ytFabric Extension

ytFabric is a Chrome extension that captures YouTube video URLs, allows users to enter a filename, and copies a formatted command to the clipboard. These clipboard comments are meant to be used with [Fabric](https://github.com/danielmiessler/fabric) and, if set up correctly, will extract wisdom from a YouTube video. It supports various YouTube URL formats and provides a user-friendly modal interface.

## Features

- Captures YouTube video URLs.
- Supports various YouTube URL formats (standard, shortened, embed, etc.).
- Provides a modal for entering a filename.
- Copies a formatted command to the clipboard with the provided filename and video ID.
- Displays feedback message showing the copied text.
- Includes a close button to manually close the modal.

## Installation

1. Clone the repository or download the ZIP file and extract it.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory where you have the extension files.

## Usage

1. Open a YouTube video in Chrome.
2. Click the ytFabric extension button.
3. Enter a filename in the modal and click "Submit".
4. The clipboard will be updated with the formatted command.
5. Optionally, you can close the modal by clicking the "Close" button.

## Example

### Step-by-Step

1. **Visit a YouTube video URL**: For example, `https://www.youtube.com/watch?v=nQ-WWlfeMmA&t=21s`.
2. **Click the ytFabric extension button**: A modal will appear requesting a filename.
3. **Enter a filename**: For instance, enter `my_video`.
4. **Submit the filename**: Click the "Submit" button.
5. **Clipboard content**: The clipboard will now contain the following text:

    ```sh
    yt https://www.youtube.com/watch?v=nQ-WWlfeMmA --transcript | fabric --pattern extract_wisdom | obsidian ${filename}_nQ-WWlfeMmA -s -n
    ```

6. **Feedback**: A message showing the copied text will be displayed in the modal.
7. **Close the modal**: Click the "Close" button to manually close the modal.

## Icon Credit

<a href="https://www.flaticon.com/free-icons/fabric" title="fabric icons">Fabric icons created by Smashicons - Flaticon</a>

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License.