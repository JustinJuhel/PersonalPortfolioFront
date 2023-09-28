// importing de development tools logos
import * as CodeEditors from './dev_tools/code_editors';
import * as CommunicationTools from './dev_tools/communication';
import * as DesignTools from './dev_tools/design';
import * as Languages from './dev_tools/languages';

// creating the maps to get an easy access to the data
const code_editors_map = { vscode: CodeEditors.vscode, eclipse: CodeEditors.eclipse };
const communication_tools_map = { git: CommunicationTools.git, github: CommunicationTools.github }
const design_tools_map = { figma: DesignTools.figma, inkscape: DesignTools.inkscape, starUML: DesignTools.starUML }
const languages_map = { html: Languages.html, css: Languages.css, java: Languages.java, javascript: Languages.javascript, react: Languages.react }

// exporting the profile picture
export { default as photo_profil_justin } from './photo_profil_justin.png';
// exporting the dev tools maps
export { code_editors_map, communication_tools_map, design_tools_map, languages_map }
