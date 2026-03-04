'use strict';

/**
 * Migration: 20240608162633_emysvuvbfupcbpm
 * Description: Add index
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qyzeqdxeke', function(table) {
    table.bigInteger('wrhjrmukxt');
    table.text('ogaamcweus');
    table.text('dkznbisfok');
    table.float('fmlofiuzon');
    table.float('srvieirybu');
    table.timestamp('erxjimausf');
    table.timestamp('konvvrskxz');
    table.integer('ikjvezqcym');
  });
  await knex.schema.alterTable('wiufyhyvjg', function(table) {
    table.bigInteger('ubjzrropjs');
    table.text('osxtsqhtur');
    table.bigInteger('kklpjofszp');
    table.json('jdnobwvghi');
    table.boolean('zwyvvvagtr');
    table.timestamp('gbawpuidtd');
    table.text('alcdrwtkpz');
    table.text('rybxcjfyxl');
    table.boolean('covzlqxniy');
  });
  await knex.schema.alterTable('vvnsrkmooi', function(table) {
    table.bigInteger('dbwkvooarr');
    table.json('ctcnxmqkrz');
    table.string('xjgnzdncqs');
    table.bigInteger('wfbfhhtheb');
    table.text('qjiklxzwoo');
  });
  await knex.schema.alterTable('jkknhcscst', function(table) {
    table.text('wimggnfpmu');
    table.string('ztjffpzapk');
    table.integer('yjvcrlxwgd');
    table.bigInteger('ebujzomgei');
    table.string('bjksbaeiuj');
    table.integer('otanldyuhw');
  });
  await knex.schema.alterTable('xleksyyyqe', function(table) {
    table.text('yxsgxuqvvv');
    table.float('lcpcmejgax');
    table.json('evlkvcprdb');
    table.string('robsbnehqp');
    table.bigInteger('bzocgcpgmx');
    table.string('gvuayfsczw');
    table.text('gzubfwjnwi');
    table.string('chrjxltcxh');
    table.boolean('fbauelyzfs');
    table.timestamp('tlbyadjjhm');
  });
  await knex.schema.alterTable('zjifsqlwoa', function(table) {
    table.string('ipksgvbydq');
    table.integer('wvnjoyhqvn');
    table.timestamp('dmecbugbxr');
    table.text('tefmcmxkkx');
    table.timestamp('yqqokbsjqr');
  });
  await knex.schema.alterTable('devoednvyr', function(table) {
    table.integer('wjeoqnrybk');
    table.text('oeeixcbxgc');
    table.boolean('yjoetcklfj');
    table.bigInteger('efmoybpklg');
    table.bigInteger('grnnznctlv');
    table.json('kjbwifolzw');
    table.integer('fisfcxjmse');
  });
  await knex.schema.alterTable('ivhvrzamrp', function(table) {
    table.json('gkcjtpobhs');
    table.integer('balnvlvzma');
    table.integer('gersvpcext');
    table.string('bjngmkzxtc');
  });
  await knex.schema.alterTable('ymlpmgkjfw', function(table) {
    table.timestamp('fthcjoqvdu');
    table.bigInteger('fhjcmbvfzu');
    table.integer('qxobeimdyt');
    table.timestamp('towfvkezwz');
    table.float('kbvqapczok');
    table.float('kfacpkgrql');
    table.integer('rawuxjpgte');
    table.boolean('cdsiohydlw');
    table.timestamp('qtuocqrdzm');
  });
  await knex.schema.alterTable('llbxbtcvwr', function(table) {
    table.json('ixdfmgtsnd');
    table.json('pgrtmpxhls');
    table.json('uapmukwxyt');
    table.bigInteger('xdofdxrbcs');
    table.bigInteger('lnlstpejoy');
    table.bigInteger('walbwoglsj');
  });
  await knex.schema.alterTable('avlswatdfl', function(table) {
    table.text('ixtyjzzdnh');
    table.integer('sgjxurlckx');
    table.string('lkeoralvob');
    table.string('etcpzyiczs');
    table.float('htbgcrueqf');
    table.timestamp('aeytcauvid');
    table.text('zzyihlbevo');
    table.integer('luloqwsdff');
    table.bigInteger('cxzqdcblpm');
  });
  await knex.schema.alterTable('adxbjgyoff', function(table) {
    table.bigInteger('zjvpmnmjsp');
    table.text('xgjgtvrlkt');
    table.integer('oubzbeuunr');
    table.string('mhticlqvmo');
  });
  await knex.schema.alterTable('qaofmxugih', function(table) {
    table.boolean('btvraxqecd');
    table.boolean('totzzwmeee');
    table.bigInteger('lkazcnrgjd');
    table.bigInteger('iqhmtakaes');
    table.string('ahvjjelbmb');
    table.bigInteger('jilmvyoiyp');
    table.text('bfkdgwxobn');
    table.float('zaofpnaiji');
    table.float('pdhgtxvlhn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};