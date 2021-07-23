
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','9fe'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','2dd'),
  exact: true,
},
{
  path: '/docs/access-the-sana/browse-the-sana',
  component: ComponentCreator('/docs/access-the-sana/browse-the-sana','dac'),
  exact: true,
},
{
  path: '/docs/access-the-sana/host-your-website',
  component: ComponentCreator('/docs/access-the-sana/host-your-website','74d'),
  exact: true,
},
{
  path: '/docs/access-the-sana/introduction',
  component: ComponentCreator('/docs/access-the-sana/introduction','d4a'),
  exact: true,
},
{
  path: '/docs/access-the-sana/keep-your-data-alive',
  component: ComponentCreator('/docs/access-the-sana/keep-your-data-alive','4be'),
  exact: true,
},
{
  path: '/docs/access-the-sana/light-nodes',
  component: ComponentCreator('/docs/access-the-sana/light-nodes','4f7'),
  exact: true,
},
{
  path: '/docs/access-the-sana/pinning',
  component: ComponentCreator('/docs/access-the-sana/pinning','40d'),
  exact: true,
},
{
  path: '/docs/access-the-sana/store-with-encryption',
  component: ComponentCreator('/docs/access-the-sana/store-with-encryption','327'),
  exact: true,
},
{
  path: '/docs/access-the-sana/syncing',
  component: ComponentCreator('/docs/access-the-sana/syncing','1ba'),
  exact: true,
},
{
  path: '/docs/access-the-sana/upload-a-directory',
  component: ComponentCreator('/docs/access-the-sana/upload-a-directory','b9a'),
  exact: true,
},
{
  path: '/docs/access-the-sana/upload-and-download',
  component: ComponentCreator('/docs/access-the-sana/upload-and-download','40e'),
  exact: true,
},
{
  path: '/docs/ant-developers/starting-a-test-network',
  component: ComponentCreator('/docs/ant-developers/starting-a-test-network','938'),
  exact: true,
},
{
  path: '/docs/ant-developers/useful-dev-info',
  component: ComponentCreator('/docs/ant-developers/useful-dev-info','bb6'),
  exact: true,
},
{
  path: '/docs/api-reference/api-reference',
  component: ComponentCreator('/docs/api-reference/api-reference','7bb'),
  exact: true,
},
{
  path: '/docs/architecture/architecture',
  component: ComponentCreator('/docs/architecture/architecture','ab9'),
  exact: true,
},
{
  path: '/docs/community/awesome-swarm',
  component: ComponentCreator('/docs/community/awesome-swarm','390'),
  exact: true,
},
{
  path: '/docs/community/community',
  component: ComponentCreator('/docs/community/community','e86'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/bee-js',
  component: ComponentCreator('/docs/dapps-on-sana/bee-js','59a'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/chunk-types',
  component: ComponentCreator('/docs/dapps-on-sana/chunk-types','065'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/develop-on-ant',
  component: ComponentCreator('/docs/dapps-on-sana/develop-on-ant','25c'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/develop-on-bee',
  component: ComponentCreator('/docs/dapps-on-sana/develop-on-bee','0cf'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/feeds',
  component: ComponentCreator('/docs/dapps-on-sana/feeds','ef8'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/introduction',
  component: ComponentCreator('/docs/dapps-on-sana/introduction','78d'),
  exact: true,
},
{
  path: '/docs/dapps-on-sana/pss',
  component: ComponentCreator('/docs/dapps-on-sana/pss','692'),
  exact: true,
},
{
  path: '/docs/FAQ',
  component: ComponentCreator('/docs/FAQ','cea'),
  exact: true,
},
{
  path: '/docs/installation/bee-clef',
  component: ComponentCreator('/docs/installation/bee-clef','379'),
  exact: true,
},
{
  path: '/docs/installation/build-from-source',
  component: ComponentCreator('/docs/installation/build-from-source','368'),
  exact: true,
},
{
  path: '/docs/installation/connectivity',
  component: ComponentCreator('/docs/installation/connectivity','c6d'),
  exact: true,
},
{
  path: '/docs/installation/docker',
  component: ComponentCreator('/docs/installation/docker','8d9'),
  exact: true,
},
{
  path: '/docs/installation/fund-your-node',
  component: ComponentCreator('/docs/installation/fund-your-node','d30'),
  exact: true,
},
{
  path: '/docs/installation/gateway',
  component: ComponentCreator('/docs/installation/gateway','54b'),
  exact: true,
},
{
  path: '/docs/installation/hive',
  component: ComponentCreator('/docs/installation/hive','380'),
  exact: true,
},
{
  path: '/docs/installation/install',
  component: ComponentCreator('/docs/installation/install','d66'),
  exact: true,
},
{
  path: '/docs/installation/manual',
  component: ComponentCreator('/docs/installation/manual','c0b'),
  exact: true,
},
{
  path: '/docs/installation/quick-start',
  component: ComponentCreator('/docs/installation/quick-start','367'),
  exact: true,
},
{
  path: '/docs/installation/verify',
  component: ComponentCreator('/docs/installation/verify','ad1'),
  exact: true,
},
{
  path: '/docs/working-with-ant/ant-tools',
  component: ComponentCreator('/docs/working-with-ant/ant-tools','069'),
  exact: true,
},
{
  path: '/docs/working-with-ant/backups',
  component: ComponentCreator('/docs/working-with-ant/backups','fd5'),
  exact: true,
},
{
  path: '/docs/working-with-ant/cashing-out',
  component: ComponentCreator('/docs/working-with-ant/cashing-out','1bd'),
  exact: true,
},
{
  path: '/docs/working-with-ant/configuration',
  component: ComponentCreator('/docs/working-with-ant/configuration','90e'),
  exact: true,
},
{
  path: '/docs/working-with-ant/debug-api',
  component: ComponentCreator('/docs/working-with-ant/debug-api','992'),
  exact: true,
},
{
  path: '/docs/working-with-ant/introduction',
  component: ComponentCreator('/docs/working-with-ant/introduction','330'),
  exact: true,
},
{
  path: '/docs/working-with-ant/logs-and-files',
  component: ComponentCreator('/docs/working-with-ant/logs-and-files','c35'),
  exact: true,
},
{
  path: '/docs/working-with-ant/monitoring',
  component: ComponentCreator('/docs/working-with-ant/monitoring','d1c'),
  exact: true,
},
{
  path: '/docs/working-with-ant/uninstalling-ant',
  component: ComponentCreator('/docs/working-with-ant/uninstalling-ant','886'),
  exact: true,
},
{
  path: '/docs/working-with-ant/upgrade',
  component: ComponentCreator('/docs/working-with-ant/upgrade','181'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
