"use client";

interface ImportModalProps {
  open: boolean;
  onClose: () => void;
  text: string;
  onTextChange: (v: string) => void;
  busy: boolean;
  onImport: () => void;
  t: (key: string) => string;
}

export default function ImportModal({
  open,
  onClose,
  text,
  onTextChange,
  busy,
  onImport,
  t,
}: ImportModalProps) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-lg font-semibold mb-2">{t("import_title")}</h3>
        <p className="text-muted text-sm mb-2">{t("import_desc")}</p>
        <textarea
          className="textarea font-mono"
          rows={10}
          placeholder={t("ph_import")}
          value={text}
          onChange={(e) => onTextChange(e.target.value)}
        />
        <div className="flex justify-end gap-2 mt-3">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            {t("cancel")}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            disabled={busy}
            onClick={onImport}
          >
            {busy ? t("importing") : t("import_confirm")}
          </button>
        </div>
      </div>
    </div>
  );
}