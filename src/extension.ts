// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// vscode 模块为 VS Code 内置，不需要通过 npm 安装
import { ExtensionContext, commands, window, workspace }from 'vscode';

import Provider from './Provider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// 基金类
	const provider = new Provider();

	// 数据注册
	// vscode 提供的 registerTreeDataProvider 为视图提供数据。
	// fund-list 为在package.json 注册的视图 ID
	window.registerTreeDataProvider('fund-list', provider);

}

// this method is called when your extension is deactivated
export function deactivate() {}
