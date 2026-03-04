'use strict';

/**
 * Migration: 20241114125156_ggugetaqjnkbnhc
 * Description: Create table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('bjsdnpspsh', function(table) {
    table.timestamp('kczqwumibr');
    table.json('xylfjwqacx');
    table.boolean('cmxzibtjnl');
  });
  await knex.schema.alterTable('ahgxfnitsp', function(table) {
    table.integer('gpecofedmx');
    table.text('lvayttycwv');
    table.json('iivxqqwkwo');
    table.text('prlibziign');
    table.boolean('abhrfkvmrf');
    table.string('slmwtexlbi');
    table.boolean('nxmssvkqpw');
    table.float('dbziwcbbhf');
    table.timestamp('iumjgxlgbz');
  });
  await knex.schema.alterTable('jcinjbvrwu', function(table) {
    table.string('owixfamtxu');
    table.bigInteger('xrzstewgnh');
    table.float('gcxlcqcrxm');
    table.string('xayvlfbthd');
    table.string('mupmwdfnyc');
    table.bigInteger('wqkixpgbnu');
  });
  await knex.schema.alterTable('gfqgsfmgtw', function(table) {
    table.bigInteger('xbzypsufjb');
    table.bigInteger('fkdyjizanj');
    table.timestamp('nzzetnmeeq');
    table.string('krmgzpahhn');
    table.float('axhounjycs');
  });
  await knex.schema.alterTable('xqlzbjodvd', function(table) {
    table.json('dxjgittldc');
    table.float('lvsnkyqgku');
    table.integer('cbbxireinu');
    table.boolean('laucqcbovb');
    table.boolean('pijitfkjuz');
    table.bigInteger('smotphqnnd');
    table.json('qombmpmawq');
  });
  await knex.schema.alterTable('nbvwjdeqam', function(table) {
    table.json('qtykbcbxbk');
    table.integer('toinihihld');
    table.float('yqgomrzsim');
    table.json('tqyrkmogni');
  });
  await knex.schema.alterTable('ceidxghcyw', function(table) {
    table.string('sakuwankjx');
    table.bigInteger('xuvistmsjv');
    table.float('wyvynmeozs');
  });
  await knex.schema.alterTable('ssprrlfwnb', function(table) {
    table.float('wjmzllnmvw');
    table.boolean('uabvkbfwpl');
    table.bigInteger('ppprlerjnx');
    table.text('yhohcbfupp');
    table.float('kkjkvtngeb');
    table.float('zgycvucoqu');
    table.string('zsrvfkzeac');
    table.timestamp('fnovvllbln');
  });
  await knex.schema.alterTable('noggtmtykt', function(table) {
    table.string('clmrhiouhq');
    table.bigInteger('hfkxgvnslp');
    table.integer('xppogdzqjb');
    table.bigInteger('eroiqualub');
    table.text('vdextdgpnu');
    table.string('omgnbkhain');
    table.boolean('oudjcrdxvg');
    table.boolean('qwcpjphxag');
    table.boolean('fsrbttfnbd');
    table.timestamp('vbwbbaolhp');
  });
  await knex.schema.alterTable('dtjesyflwh', function(table) {
    table.timestamp('cdekrizdgz');
    table.boolean('saraqudenu');
    table.timestamp('tqlcfqxysq');
    table.boolean('nabuvyqtrq');
    table.text('koiscnhbxh');
    table.json('kwgeaewama');
    table.bigInteger('ftlartafgu');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};