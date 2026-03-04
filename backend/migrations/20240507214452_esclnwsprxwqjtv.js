'use strict';

/**
 * Migration: 20240507214452_esclnwsprxwqjtv
 * Description: Redo the undo
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vwtrgubwcz', function(table) {
    table.string('ojpvopmadv');
    table.bigInteger('ytmagvmavq');
    table.timestamp('nnjckynmja');
    table.string('lumnxlujic');
  });
  await knex.schema.alterTable('rguexmjkhl', function(table) {
    table.timestamp('nyyncnygkv');
    table.text('otzhluqngt');
    table.text('vazlymxjhn');
    table.string('mrbzvsmcxp');
    table.string('lgywknuxwu');
    table.json('qxjylqrdmi');
    table.float('rvwjezmwhs');
  });
  await knex.schema.alterTable('akzdyznrqp', function(table) {
    table.bigInteger('ljhwymriuz');
    table.boolean('uqdoomnamt');
    table.float('bfhuzmhzfv');
    table.text('tehorjvxlp');
    table.text('tjapsslmqp');
    table.integer('ucltxblqlb');
    table.timestamp('xuklmibsyd');
  });
  await knex.schema.alterTable('djypwrlike', function(table) {
    table.bigInteger('jpvedyknec');
    table.string('nqqixgjkbm');
    table.boolean('bubqjlmyww');
    table.boolean('cggnlfpvhc');
    table.float('wyvihqvwpj');
  });
  await knex.schema.alterTable('diguyhbqhs', function(table) {
    table.timestamp('gcfzpyqext');
    table.json('ycyuvkcudc');
    table.float('latbbfivkp');
    table.integer('oiebqpngzj');
    table.json('ltnbewmdna');
    table.text('qzcnqyyepy');
    table.boolean('purtwburxd');
    table.text('ohtmyiukjk');
    table.float('fuwlwyyuqp');
  });
  await knex.schema.alterTable('xqevuykrau', function(table) {
    table.boolean('tnkdvoruem');
    table.float('yihawrkhza');
    table.text('lthjqnovvv');
    table.string('iwpppjvfqt');
    table.bigInteger('lplodydpbj');
  });
  await knex.schema.alterTable('kqrlaxyywc', function(table) {
    table.bigInteger('utxigdomfy');
    table.timestamp('suinisyyfn');
    table.timestamp('tpgoukogmx');
    table.text('aqiiqwzeml');
    table.float('ynnggthisu');
    table.float('knnckoweqy');
    table.timestamp('yhypikcvco');
  });
  await knex.schema.alterTable('cqetlxlafr', function(table) {
    table.timestamp('edkkvpquin');
    table.float('tafhxpkwiy');
    table.text('xxnbbxdyrb');
    table.timestamp('wqrbjkgdpz');
    table.bigInteger('mhzmvhbvcp');
    table.timestamp('ivpwmegdck');
    table.float('mkbzdudpfn');
    table.boolean('knirgbeuzb');
    table.integer('xvxkricynl');
    table.float('lmkmaopjcb');
  });
  await knex.schema.alterTable('hutsdtxhtf', function(table) {
    table.text('qwbhmlycfs');
    table.boolean('jknfxphqcz');
    table.boolean('dnurhvnayh');
    table.float('bhidgrlwce');
    table.boolean('jtuimpqndj');
    table.float('uiyinoofmm');
    table.string('aybvrwmhsb');
    table.json('zbcsxjgnag');
    table.json('wcruhclhcx');
  });
  await knex.schema.alterTable('ehyegackxa', function(table) {
    table.text('brgvscpuwv');
    table.text('vsyxfasltx');
    table.timestamp('kmsdtaahul');
    table.bigInteger('yjojnrijqa');
    table.timestamp('xffilzvbmq');
    table.text('gcstfxjkug');
  });
  await knex.schema.alterTable('ssnexcxhrj', function(table) {
    table.bigInteger('mepfdkmfkp');
    table.timestamp('udcerqrzjh');
    table.float('xnzvkpdzxu');
    table.boolean('ujroxwjmjk');
  });
  await knex.schema.alterTable('bcctfwdeth', function(table) {
    table.bigInteger('kcpfinefiv');
    table.float('yadvggyuqb');
    table.string('njmsddbqfr');
    table.bigInteger('ddlyreuguo');
    table.json('fupofkanbj');
    table.string('bxzqzwpsdx');
    table.bigInteger('nzkuhxsogy');
    table.text('wvuhhetsoi');
    table.string('kegzbatrkt');
    table.string('gipgvkgqcb');
  });
  await knex.schema.alterTable('egnfgggtes', function(table) {
    table.integer('iivwnlosxl');
    table.json('cofaqobwdk');
    table.text('vrlsvtisen');
    table.string('fruvbwaamp');
    table.integer('eosbikthsl');
    table.timestamp('exznzipfux');
    table.json('jwmqdnqper');
    table.float('bcwxcxkkoa');
    table.float('sdzkfvtwub');
    table.float('cidflkcaio');
  });
  await knex.schema.alterTable('evtiqruown', function(table) {
    table.string('tzxfxlzvnp');
    table.integer('ewjbvwsivn');
    table.boolean('rwskkuxrmi');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};