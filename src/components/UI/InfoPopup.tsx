import { CloseIcon } from "./Icons";

interface InfoPopupProps {
  show: boolean;
  onClose: () => void;
  popupRef: React.RefObject<HTMLDivElement | null>;
}

export default function InfoPopup({ show, onClose, popupRef }: InfoPopupProps) {
  if (!show) return null;

  return (
    <div
      ref={popupRef}
      className="absolute bottom-full right-0 mb-2 w-72 md:w-96 max-h-96 overflow-y-auto flex items-end flex-col  p-4 bg-nord9/20 backdrop-blur-lg rounded-md shadow-xl z-50 text-nord5 text-xs leading-relaxed"
    >
      <button
        onClick={onClose}
        className="sticky top-2 right-2 p-0.5 rounded-full hover:bg-nord11 bg-nord1/80 backdrop-blur-lg  z-100 "
        aria-label="Close info"
      >
        <CloseIcon />
      </button>
      <div>
        <h3 className="font-semibold text-nord8 text-sm mb-2">Editor Information</h3>
        <p className="mb-1">
          <strong className="text-nord7">Focus Editor:</strong> Press <kbd>i</kbd> to quickly focus
          the Markdown editor.
        </p>
        <p className="mb-1">
          <strong className="text-nord7">Delete all content:</strong> Press <kbd>ggdG</kbd> to
          quickly delete all content.
        </p>

        <ul className="mb-1">
          <strong className="text-nord7">Vim Mode:</strong> Basic Vim keybindings are enabled.
          <li>
            <kbd>Esc</kbd>
          </li>
          <li>
            <kbd>i</kbd>
          </li>
          <li>
            <kbd>:w</kbd> to save .md
          </li>
          <li>
            <kbd>:ws</kbd> to save slides{" "}
          </li>
          <li>
            <kbd>:u</kbd> to upload
          </li>
          <li>
            <kbd>:p</kbd> to preview
          </li>
          <li>
            <kbd>:page</kbd> to toggle page numbers
          </li>
          <li>
            <kbd>:h</kbd> to add header/footer
          </li>
          <li>
            <kbd>:t</kbd> to switch to next theme
          </li>
          <li>
            <kbd>:f</kbd> to switch to next font {/* New Vim command */}
          </li>
        </ul>
        <p className="mb-1">
          <strong className="text-nord7">Slide Creation:</strong> Use Markdown headings
          <code className="">#</code>, <code className="">##</code> for new slides.
        </p>
        <p className="mb-1">
          <strong className="text-nord7">Live Preview:</strong> Shows the current slide.
        </p>
        <p>
          <strong className="text-nord7">Export:</strong> Use the buttons in the header or Vim commands.
        </p>
        <p>For more information on how to use md Presentation, check</p>
        <a href="https://github.com/chraltro/mdpresentation" className="text-nord9 underline text-xs">
          Github readme.
        </a>
      </div>
    </div>
  );
}

