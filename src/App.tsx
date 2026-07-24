import {
  Branches,
  CommitActivityLine,
  ContributorsStats,
  Gitmap,
  OrgBadge,
  PullRequests,
  RepoBadge,
  Status,
  UserBadge,
} from '@getdashfy/ext-github'
import { Dashfy, WidgetRegistry } from '@getdashfy/ui'

// Register GitHub extension
WidgetRegistry.addExtension('github', {
  Branches,
  CommitActivityLine,
  ContributorsStats,
  Gitmap,
  OrgBadge,
  PullRequests,
  RepoBadge,
  Status,
  UserBadge,
})

export const App = () => {
  // In production the UI is served by the Dashfy server itself, so connect to
  // the same origin. In dev, leave undefined to use the default localhost:5001.
  const serverUrl = import.meta.env.PROD ? window.location.origin : undefined

  return <Dashfy serverUrl={serverUrl} />
}
