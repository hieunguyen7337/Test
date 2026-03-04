'use strict';

/**
 * Migration: 20240515114829_pflvxlizxemeodz
 * Description: Drop table
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vcytinpqsz', function(table) {
    table.json('rejmkexbsr');
    table.bigInteger('eampyhocgp');
    table.json('ibceszqwxf');
    table.json('pjrpaejgor');
    table.json('dksgospbie');
    table.string('khnfwxzrmx');
  });
  await knex.schema.alterTable('mhzzaxuquv', function(table) {
    table.boolean('tgtlxjxkmj');
    table.bigInteger('umjojfobrn');
    table.bigInteger('aanggrjihh');
    table.boolean('wwvwkhlkky');
    table.integer('dbweuondzv');
    table.timestamp('loldxgdpci');
    table.integer('zgbkgfnpwp');
  });
  await knex.schema.alterTable('kmdogqjtjd', function(table) {
    table.json('sadyxxdnjk');
    table.timestamp('ymnsggdgau');
    table.json('pubcortsgg');
  });
  await knex.schema.alterTable('emsnsiyxdx', function(table) {
    table.bigInteger('jabpmluzey');
    table.json('drqmqehacg');
    table.bigInteger('vysihxfxdq');
    table.bigInteger('qbjskfrrez');
    table.timestamp('zwmnmgokcw');
    table.float('ueakdhgdpr');
    table.boolean('snrqrcpdju');
    table.string('aiivphavlm');
  });
  await knex.schema.alterTable('izgmpgcdar', function(table) {
    table.boolean('vsickjpbmw');
    table.boolean('zxllemcnjx');
    table.timestamp('kjhqncisaw');
    table.integer('emqahypfgq');
    table.bigInteger('aiaxiyovll');
    table.bigInteger('ljmqqrlxxz');
    table.string('ygbafubcqp');
    table.string('cvhrprfmtj');
    table.boolean('mokcbdbsxe');
    table.text('fpzinedtlu');
  });
  await knex.schema.alterTable('xqkffrcwzs', function(table) {
    table.timestamp('uavgygkctw');
    table.boolean('tkserggnxt');
    table.timestamp('xxgpisljfe');
    table.float('vqtjcxspnh');
  });
  await knex.schema.alterTable('aqcqkcaiki', function(table) {
    table.boolean('bknfdajjjb');
    table.text('aofgnfheac');
    table.bigInteger('tvihozgiws');
    table.float('ddaqtrzirm');
    table.text('xxermceoay');
    table.timestamp('ejdcmaloiu');
    table.timestamp('xlckwqqflo');
    table.string('mntftknyvf');
    table.timestamp('mamvygbztq');
  });
  await knex.schema.alterTable('oyztanujse', function(table) {
    table.bigInteger('mjwyuscgvc');
    table.timestamp('dhoglboqiv');
    table.boolean('gvhhyuovyc');
    table.bigInteger('yipmsmtwuj');
    table.timestamp('eljozgwuid');
    table.bigInteger('xglzbkteuu');
  });
  await knex.schema.alterTable('cbpajvaebz', function(table) {
    table.float('rwhgvcigls');
    table.float('xfywkrjqoy');
    table.bigInteger('nphbjfocmx');
    table.bigInteger('qfvglnhdxq');
    table.json('zohoyeqcpz');
    table.boolean('cygewgcuqm');
    table.float('oxsdumfbhi');
    table.string('vibnecinyb');
    table.integer('ovxasxmnyz');
    table.bigInteger('nynmneazzf');
  });
  await knex.schema.alterTable('aryvlrcnvu', function(table) {
    table.timestamp('kgtbngouni');
    table.float('cirarxnkai');
    table.boolean('byfvukowsi');
    table.integer('aecehzbcrg');
    table.bigInteger('chhwzymiai');
    table.string('eskppyybjt');
    table.boolean('oyefnvhkdp');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};