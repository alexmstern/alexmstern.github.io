import dreamMistIcon from '../assets/dream-mist-icon.png'
import ctaPipelineIcon from '../assets/cta-pipeline-icon.svg'
import type { TechIconKey } from './techIcons'

export type Project = {
  name: string
  description: string
  href: string
  icon: string
  tech: TechIconKey[]
  credit?: string
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
  {
    name: 'CTA Data Pipeline',
    description:
      "A real-time data pipeline that polls Chicago's CTA Train Tracker API every 60 seconds to capture positions and delay status for all eight L lines, storing clean rows in DuckDB. Built as the foundation for a delay-propagation model of the Brown Line, analyzing how disruptions cascade through the network.",
    href: 'https://github.com/alxstern/cta-data-pipeline',
    icon: ctaPipelineIcon,
    tech: ['python', 'duckdb', 'railway'],
    credit: 'The CTA Train Tracker (SM) logo icon is a trademark of the Chicago Transit Authority.',
  },
]
