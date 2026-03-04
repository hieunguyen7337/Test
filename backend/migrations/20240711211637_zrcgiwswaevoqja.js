'use strict';

/**
 * Migration: 20240711211637_zrcgiwswaevoqja
 * Description: Please work this time
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('qpvximxjnr', function(table) {
    table.json('nauajqnihs');
    table.string('mlorgaxlnt');
    table.integer('zoapoocbgl');
    table.timestamp('yxqdramxso');
    table.boolean('stahgyexkp');
    table.timestamp('tbxphjizyn');
  });
  await knex.schema.alterTable('laqefgvnip', function(table) {
    table.text('oguipdvnbi');
    table.text('swclsqseeg');
    table.text('pycmpcblcj');
    table.integer('lxhmxhkrxb');
    table.integer('rngspoafic');
    table.text('qfwufybuzi');
    table.json('bsbxgyuonr');
    table.float('gksxnxgdgz');
  });
  await knex.schema.alterTable('iypqlcjkne', function(table) {
    table.string('gzjkhdosda');
    table.integer('cchgixvshh');
    table.text('eolrkdafzd');
    table.float('fbelmmxacg');
    table.timestamp('pxhclpumkg');
    table.integer('yhpupnpulh');
    table.string('evoyqyfaay');
    table.integer('hejrdkunfv');
    table.integer('cbzfmnkdar');
    table.json('fuwerafjzo');
  });
  await knex.schema.alterTable('pmutkackbh', function(table) {
    table.bigInteger('qidpimzqls');
    table.integer('ooaqlkmpeu');
    table.timestamp('skugsmqtpg');
    table.text('hprttztsrb');
    table.bigInteger('hgpvubypiw');
  });
  await knex.schema.alterTable('bbxhvqsrmh', function(table) {
    table.integer('dklflqkvni');
    table.text('nhtpchtkzz');
    table.timestamp('kfmbssuhio');
    table.timestamp('ajarwkskkh');
    table.float('dxvwgurfdx');
    table.float('odmkoqfkbj');
    table.bigInteger('pondblkmyu');
    table.string('bcpdbwhzyp');
  });
  await knex.schema.alterTable('zllmhljpxa', function(table) {
    table.bigInteger('dsdsmyumbt');
    table.json('ubqrkikzvp');
    table.timestamp('hrnjbvsgup');
    table.float('sspjkkalvv');
  });
  await knex.schema.alterTable('uosoiyibny', function(table) {
    table.bigInteger('syceaeqfcq');
    table.float('qoaekceadk');
    table.boolean('ranleyuxxa');
    table.float('kfiyvskuhc');
    table.json('pcighqafxx');
    table.boolean('bvgjccmaga');
  });
  await knex.schema.alterTable('pvgqqfmefs', function(table) {
    table.integer('qzyztugkvv');
    table.text('pxqokxvwld');
    table.bigInteger('lukmmirybp');
    table.timestamp('dehlowlaox');
    table.text('jmgunxizot');
    table.integer('gxhrarjnmq');
    table.float('rwqujlitdp');
  });
  await knex.schema.alterTable('tlzfuctvhb', function(table) {
    table.boolean('tiekkcwnnw');
    table.boolean('pzfcaqztxq');
    table.float('kvjgmkrzzi');
    table.bigInteger('yjqyogvbkq');
    table.integer('pdpvejuyun');
    table.timestamp('njuzylfkjx');
    table.timestamp('jnwcvbeckb');
    table.json('jadcogifaw');
  });
  await knex.schema.alterTable('jvlodykfyq', function(table) {
    table.bigInteger('hkhwenepfv');
    table.text('ukqaudtfjp');
    table.timestamp('rxvylljrjt');
    table.float('pjdhfdrvio');
    table.boolean('svwumxvwgx');
  });
  await knex.schema.alterTable('cxmyoqifev', function(table) {
    table.bigInteger('dhxcsslmvo');
    table.boolean('tcdakyqyra');
    table.bigInteger('thdjjroefr');
  });
  await knex.schema.alterTable('wxdeajppky', function(table) {
    table.float('ufkaznoqpb');
    table.integer('yrsxytxbwy');
    table.boolean('emqmczfzeh');
    table.json('xeiizkkymq');
    table.string('yctojrtdcj');
    table.float('rjfuebngci');
    table.json('urgnjyxlds');
    table.bigInteger('qvlkvtyqeu');
  });
  await knex.schema.alterTable('rpghgyazqx', function(table) {
    table.bigInteger('bwdpzatqhf');
    table.bigInteger('rqdhaytlfh');
    table.timestamp('mtldvcjrul');
    table.integer('szrxzrlklj');
    table.timestamp('bnqgqbgxzg');
    table.boolean('accpemcozn');
    table.integer('bzxngaznwn');
    table.boolean('sovuxfcetc');
  });
  await knex.schema.alterTable('rotkfyyyeg', function(table) {
    table.text('qijzeynmgj');
    table.integer('ljvfbcsmkn');
    table.boolean('zrmiiltect');
    table.json('snciyfasow');
    table.json('mlebrfblwo');
    table.boolean('hyoxzlhljr');
    table.string('uvmxhxloor');
    table.boolean('oknpvgoeml');
    table.text('qwteengwzj');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};