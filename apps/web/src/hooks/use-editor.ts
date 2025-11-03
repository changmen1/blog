// TODO 编辑器图标映射

import vscode from "@/assets/Editor/vscode.png";
import idea from "@/assets/Editor/idea.png";

// 编辑器名称
const editorIconMap: Record<string, string> = {
    "VS Code": vscode,
    "IntelliJ IDEA": idea,
};

export default function useEditor() {
    return function getEditorIcon(name: string): string | null {
        return editorIconMap[name] || null;
    };
}

