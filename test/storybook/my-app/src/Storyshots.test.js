import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { createSerializer } from '@emotion/jest';
initStoryshots({
  integrityOptions: { cwd: __dirname }, // it will start searching from the current directory
  test: multiSnapshotWithOptions(),
  snapshotSerializers: [createSerializer()],
});
