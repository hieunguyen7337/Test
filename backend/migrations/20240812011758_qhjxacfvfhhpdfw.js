'use strict';

/**
 * Migration: 20240812011758_qhjxacfvfhhpdfw
 * Description: Undo previous migration
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('hklbuzjvol', function(table) {
    table.boolean('fuwprbtesp');
    table.float('fcjwevtrla');
    table.json('iidquaealy');
    table.bigInteger('qglkutdpci');
    table.text('jvlufwhril');
  });
  await knex.schema.alterTable('zjoousqvvq', function(table) {
    table.integer('fqcumavvgt');
    table.float('kspxltmpgl');
    table.timestamp('sshxfoijim');
    table.integer('vmuagvmecm');
  });
  await knex.schema.alterTable('jldussncnl', function(table) {
    table.json('huhkvzvjyn');
    table.text('rqjhpuftah');
    table.timestamp('xkeoayfjia');
    table.timestamp('myezgtcujj');
    table.integer('bqfsbznjjl');
    table.boolean('tclaazsbxc');
  });
  await knex.schema.alterTable('izuwxvpywd', function(table) {
    table.float('zknueqbemk');
    table.integer('itmvqoxlyc');
    table.timestamp('huopydxusk');
    table.float('mbxlyowzmx');
    table.timestamp('syaudtxgzx');
  });
  await knex.schema.alterTable('xwdamegjwy', function(table) {
    table.text('shffcbtiwx');
    table.text('glgdvblnnq');
    table.integer('ieebloldmw');
    table.json('gulwteoptr');
    table.text('uqsaqlipao');
    table.timestamp('rgntvvotgk');
    table.boolean('ufhzxhhulg');
    table.boolean('kcxyoesmco');
    table.text('yqpgbymuda');
  });
  await knex.schema.alterTable('ipvawthlnx', function(table) {
    table.json('xbasbzllzl');
    table.text('ucdzkzivem');
    table.float('tnziwdrhad');
    table.float('pjcthmbtnx');
    table.boolean('uagrxrrism');
    table.string('qjbxcafhtw');
    table.timestamp('ldictnvfjo');
    table.integer('foeozufyap');
    table.bigInteger('vdvkvulrbc');
  });
  await knex.schema.alterTable('plicfgyrbn', function(table) {
    table.bigInteger('bjyvipkylz');
    table.bigInteger('edafpzrmyq');
    table.float('vxkejzslou');
    table.timestamp('fzimvdofag');
    table.bigInteger('eyrexgahik');
    table.text('kjixybtfib');
    table.timestamp('booatcbdmm');
    table.string('iugctxtrmb');
    table.float('modfyjotsn');
    table.json('pmauvamkhf');
  });
  await knex.schema.alterTable('bojulnysdx', function(table) {
    table.string('kgrubtfbig');
    table.text('pddclkrsqy');
    table.integer('bmkkpvhche');
    table.integer('aeilflrjnp');
    table.timestamp('hxnufymmxd');
    table.integer('oblneymqpj');
    table.integer('gwjjsqehtq');
    table.bigInteger('yschbegycv');
    table.float('zjbtcnkawp');
    table.string('mlebmxiofb');
  });
  await knex.schema.alterTable('ifjojwhbmt', function(table) {
    table.json('rjwfpprqvw');
    table.json('ksgebruzyv');
    table.timestamp('vhookuwtbw');
    table.integer('teprkcpxmh');
    table.json('zdkinbvtdv');
    table.boolean('nmmuopsgub');
  });
  await knex.schema.alterTable('uaubvyuyqs', function(table) {
    table.timestamp('bxmqfrjnce');
    table.json('vdjzubjinz');
    table.bigInteger('nylpyiepqo');
    table.timestamp('kjwyykuvvr');
    table.boolean('ipkjgpellv');
    table.boolean('ppkrxobonl');
    table.float('xukuazytul');
    table.integer('hridfktiew');
    table.json('zpdydtmwuw');
  });
  await knex.schema.alterTable('tcsaftihbz', function(table) {
    table.boolean('zegvkfvovd');
    table.float('fkdstvuboy');
    table.bigInteger('fmzgzvgcbc');
    table.bigInteger('faonerlgai');
    table.bigInteger('nqqvnwjykc');
    table.boolean('eetraxhbye');
    table.float('yreabxptth');
    table.string('fsgwhwrjir');
    table.json('ljiofuorma');
  });
  await knex.schema.alterTable('oqeuxzetjm', function(table) {
    table.string('vdvvsawyzq');
    table.text('cwuqqttgai');
    table.bigInteger('igqorakanr');
    table.float('gihvhsdxji');
    table.float('kdqslgyyev');
    table.integer('efqjyvqhse');
    table.json('ghxjlzxxpy');
    table.timestamp('oxwdgparbk');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};