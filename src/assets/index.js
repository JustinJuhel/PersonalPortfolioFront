// importing de development tools logos
import * as CodeEditors from './dev_tools/code_editors';
import * as CommunicationTools from './dev_tools/communication';
import * as DesignTools from './dev_tools/design';
import * as Languages from './dev_tools/languages';
import * as CSLeague from './projects/cs_league';
import * as MonNouveauSite from './projects/mon_nouveau_site';

// creating the maps to get an easy access to the data
const dev_tools_map = {
    vscode: CodeEditors.vscode,
    eclipse: CodeEditors.eclipse,
    git: CommunicationTools.git,
    github: CommunicationTools.github,
    figma: DesignTools.figma,
    inkscape: DesignTools.inkscape,
    starUML: DesignTools.starUML,
    html: Languages.html,
    css: Languages.css,
    java: Languages.java,
    javascript: Languages.javascript,
    typescript: Languages.typescript,
    react: Languages.react
}
const project_logos_map = {
    cs_league: CSLeague.logo,
    mon_nouveau_site: MonNouveauSite.logo
}

// exporting the profile picture
export { default as photo_profil_justin } from './photo_profil_justin.png';
// exporting the dev tools maps
export { dev_tools_map, project_logos_map }
