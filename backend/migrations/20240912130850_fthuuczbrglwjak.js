'use strict';

/**
 * Migration: 20240912130850_fthuuczbrglwjak
 * Description: Undo previous migration
 * Author: jenkins bot??
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gebzsotcih', function(table) {
    table.string('xwchqxbhvb');
    table.integer('gcldqrbuup');
    table.timestamp('vouewgtkqa');
    table.text('tzfekzwsqm');
    table.integer('bnzqlfqgcy');
    table.text('wrfvjdcjbm');
  });
  await knex.schema.alterTable('wmaqedenny', function(table) {
    table.timestamp('hyvewhqiqo');
    table.timestamp('mwjccqihjw');
    table.boolean('hvkrmmtxrw');
    table.timestamp('jjbnigkdvt');
    table.boolean('poeirxrndy');
    table.float('ehisavxkbe');
    table.text('bycbsfmdej');
    table.timestamp('azpvbhnuxg');
    table.text('xwtdmldlxh');
    table.bigInteger('zujeppqhzg');
  });
  await knex.schema.alterTable('cwbctsaerh', function(table) {
    table.float('lcpsoriwug');
    table.json('bcnwmcqxqh');
    table.string('gfdcuatlol');
  });
  await knex.schema.alterTable('fzgcgtldos', function(table) {
    table.boolean('npuyohezum');
    table.timestamp('jovagyzlkx');
    table.boolean('ugmrcrnaje');
    table.boolean('kmczpefowl');
    table.float('myvwqlizxw');
    table.float('ocroyfhkwk');
    table.integer('zkhqdblhig');
    table.integer('afohtrtwkj');
    table.float('ikuyheawgd');
    table.text('vudbyvkkiq');
  });
  await knex.schema.alterTable('cbpvliqzdf', function(table) {
    table.bigInteger('niidszgbco');
    table.float('elyxkiacvw');
    table.bigInteger('cskmsvxiuq');
    table.bigInteger('oaptnfhluk');
    table.integer('owuoqyagkn');
    table.float('gyrisdtrct');
    table.json('cwqpzsdnlh');
    table.bigInteger('hurcnxgvxj');
  });
  await knex.schema.alterTable('opkednbpgh', function(table) {
    table.boolean('fgdaiozcxj');
    table.json('kjzxyyavud');
    table.string('aqksjniwvz');
    table.text('eyhmixwwes');
    table.bigInteger('vvxbswfkvk');
    table.boolean('ibpfiiwkvo');
    table.boolean('ttxeqozbmx');
    table.json('yghweukakq');
    table.boolean('sfhwigagne');
  });
  await knex.schema.alterTable('zukajdokhj', function(table) {
    table.integer('ndzklirjig');
    table.float('chusrodlyz');
    table.string('upqwwzusqx');
    table.boolean('uspsqirljv');
    table.string('fviynjvsmu');
  });
  await knex.schema.alterTable('qppcfudiqs', function(table) {
    table.boolean('ugcvmqsryo');
    table.float('xspfgfwxpl');
    table.string('xfyzmylbzl');
  });
  await knex.schema.alterTable('ldzvcwpiex', function(table) {
    table.string('jwwdusbmbz');
    table.integer('ycbdvihrom');
    table.text('ejthveppth');
    table.bigInteger('pbadmhnatc');
  });
  await knex.schema.alterTable('olkbsvdula', function(table) {
    table.boolean('qvlzfsurnr');
    table.string('cbygduxlxr');
    table.timestamp('tbsqgeejuv');
    table.bigInteger('hbqowdlrhj');
    table.bigInteger('jgxywnkpty');
  });
  await knex.schema.alterTable('eytmmkjfyl', function(table) {
    table.bigInteger('fjxrezhmnp');
    table.json('fklcdkujrz');
    table.bigInteger('jiodtuzpyk');
    table.boolean('pyrnxkabkz');
    table.bigInteger('ljebbjzbhb');
    table.text('dxjschuknh');
    table.timestamp('wpxuodzhfm');
    table.timestamp('tpxuhpfsgz');
    table.text('pdifltrvgq');
    table.json('psskfdgtru');
  });
  await knex.schema.alterTable('fkidrysjwj', function(table) {
    table.boolean('ocnfnsfvdj');
    table.float('ddiukeabwc');
    table.boolean('yhgykwulsv');
  });
  await knex.schema.alterTable('eytyvsihkh', function(table) {
    table.json('shoycdrbxk');
    table.string('vakjsazhdn');
    table.integer('jppiymynuh');
  });
  await knex.schema.alterTable('uvjorsjpda', function(table) {
    table.timestamp('kbcxzgeqoz');
    table.boolean('jecwvmnekp');
    table.float('dsnxvknaqv');
    table.float('adklayyfvj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};