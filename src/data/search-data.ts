export type SearchItemKind = "source" | "procedure" | "function"

export type SearchItem = {
  id: string
  label: string
  kind: SearchItemKind
  keywords?: string[]
}

export const sourceItems: SearchItem[] = [
  {
    id: "src-1",
    label: "User Guide.pdf",
    kind: "source",
    keywords: ["guide", "manual", "documentation", "pdf"],
  },
  {
    id: "src-2",
    label: "Integration Spec.docx",
    kind: "source",
    keywords: ["spec", "integration", "docx"],
  },
  {
    id: "src-3",
    label: "Release Notes.md",
    kind: "source",
    keywords: ["changelog", "notes", "md"],
  },
]

export const apiItems: SearchItem[] = [
  {
    id: "api-1",
    label: "createInvoice",
    kind: "function",
    keywords: ["invoice", "billing", "payments"],
  },
  {
    id: "api-2",
    label: "cancelSubscription",
    kind: "procedure",
    keywords: ["subscription", "billing", "cancel"],
  },
  {
    id: "api-3",
    label: "getUserProfile",
    kind: "function",
    keywords: ["user", "profile", "account"],
  },
]
