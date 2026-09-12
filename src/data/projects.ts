import dreamMistIcon from '../assets/dream-mist-icon.png'
import feebasFinderIcon from '../assets/feebas-finder-icon.png'
import type { TechIconKey } from './techIcons'

export type Project = {
  name: string
  description: string
  siteHref?: string
  repoHref?: string
  icon: string
  tech: TechIconKey[]
  credit?: string
}

export const projects: Project[] = [
  {
    name: 'Dream Mist',
    description:
      "Reimplements Nintendo's discontinued GameSpy-based Wi-Fi Connection protocol in Swift, reviving server-side sync for the Pokémon Black/White and Black 2/White 2 games on real Nintendo DS hardware. Pairs the server with a SwiftUI dashboard for managing synced data, injecting custom content, and applying custom UI skins.",
    repoHref: 'https://github.com/alxstern/dream-mist',
    icon: dreamMistIcon,
    tech: ['swift'],
  },
  {
    name: 'Feebas Finder',
    description:
      "Calculates a Nintendo DS game's daily RNG seed from two consecutive lottery numbers, then determines which lake tiles will spawn a specific rare species and highlights them on an interactive map. Built for Pokémon Diamond, Pearl, and Platinum.",
    siteHref: 'https://alexstern.io/projects/feebas-finder',
    repoHref: 'https://github.com/alexmstern/feebas-finder',
    icon: feebasFinderIcon,
    tech: ['javascript', 'html', 'css'],
  },
]
