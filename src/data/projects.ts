import dreamMistIcon from '../assets/dream-mist-icon.png'
import type { TechIconKey } from './techIcons'

export type Project = {
  name: string
  description: string
  href: string
  icon: string
  tech: TechIconKey[]
}

export const projects: Project[] = [
  {
    name: 'Dream Mist',
    description:
      "Reimplements Nintendo's discontinued GameSpy-based Wi-Fi Connection servers in Swift, letting Pokémon Black/White and Black 2/White 2 sync with Dream World and Join Avenue on real DS/DSi/3DS hardware. Includes a SwiftUI dashboard for managing synced data, injecting custom Pokémon, and applying custom C-Gear and Pokédex skins.",
    href: 'https://github.com/alxstern/dream-mist',
    icon: dreamMistIcon,
    tech: ['swift'],
  },
]
