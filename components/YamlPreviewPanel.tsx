"use client";

import type { Status } from "./types";

const statusBadge: Record<Status, { cls: string; key: string }> = {
  waiting: { cls: "badge-secondary", key: "status_waiting" },
  generating: { cls: "badge-warning", key: "status_generating" },
  ok: { cls: "badge-success", key: "status_ok" },
  error: { cls: "badge-danger", key: "status_error" },
};

interface YamlPreviewPanelProps {
  status: Status;
  yamlText: string;
  yamlStats: string;
  t: (key: string) => string;
  errorField: string | null;
  errorMsg: string;
  onCopy: () => void;
  downloadOpen: boolean;
  setDownloadOpen: (v: boolean) => void;
  recipeIds: string[];
  downloadYaml: (mode: string) => void;
}

export default function YamlPreviewPanel({
  status,
  yamlText,
  yamlStats,
  t,
  errorField,
  errorMsg,
  onCopy,
  downloadOpen,
  setDownloadOpen,
  recipeIds,
  downloadYaml,
}: YamlPreviewPanelProps) {
  return (
    <div className="card lg:sticky lg:top-16">
      <div className="panel-head flex-wrap justify-between">
        <div className="flex items-baseline gap-2">
          <span className="panel-index">02</span>
          <h2 className="text-base font-semibold">{t("yaml_title")}</h2>
        </div>
        <div className="flex items-center gap-3">
          <span className={"badge " + statusBadge[status].cls}>
            {t(statusBadge[status].key)}
          </span>
          {yamlStats && <span className="stat-mono">{yamlStats}</span>}
        </div>
      </div>
      <div className="yaml-preview mb-3">
        {yamlText ? (
          yamlText
        ) : (
          <span className="placeholder">{t("empty_preview")}</span>
        )}
      </div>
      {status === "error" && errorMsg && !errorField && (
        <div className="field-error mb-2">{errorMsg}</div>
      )}
      <div className="flex flex-wrap gap-2 relative">
        <button
          type="button"
          className="btn btn-primary"
          disabled={!yamlText}
          onClick={onCopy}
        >
          {t("copy")}
        </button>
        <div className="relative">
          <button
            type="button"
            className="btn btn-outline"
            disabled={!yamlText}
            onClick={() => {
              if (recipeIds.length > 1) {
                setDownloadOpen(!downloadOpen);
              } else {
                downloadYaml("all");
              }
            }}
          >
            {t("download")}
          </button>
          {downloadOpen && (
            <div className="dropdown-menu top-full mt-1">
              <button
                type="button"
                className="dropdown-item"
                onClick={() => downloadYaml("all")}
              >
                {t("download_all")}
              </button>
              <button
                type="button"
                className="dropdown-item"
                onClick={() => downloadYaml("current")}
              >
                {t("download_current")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}