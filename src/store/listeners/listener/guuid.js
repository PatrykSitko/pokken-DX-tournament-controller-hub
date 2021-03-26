import setGUUID from '../../actions/system/guuid/set';

export default (store) =>
  eval('require("child_process").exec')(
    'wmic path win32_computersystemproduct get uuid',
    (err, stdout) => {
      if (err) throw new Error(err);
      store.dispatch(setGUUID(stdout));
    },
  );
