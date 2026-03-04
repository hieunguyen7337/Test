'use strict';

/**
 * Migration: 20240726005557_ncoydbaqttrzhmx
 * Description: Fix typo in column name
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('fsaruwkvln', function(table) {
    table.string('wsekwsbeau');
    table.float('rnrdjnmhct');
    table.bigInteger('wyylsojbim');
    table.boolean('fjqbktaibl');
    table.timestamp('qabdxwjchd');
    table.text('vtvruuyqgj');
    table.string('xaydmscppi');
  });
  await knex.schema.alterTable('gohbldmecy', function(table) {
    table.bigInteger('psudhhlkrk');
    table.boolean('fqgyoxcflp');
    table.text('otjrluijyt');
    table.string('cvqenscjbp');
    table.timestamp('ovowmqjwtd');
    table.string('rezzyakiwj');
    table.float('pzgaqvnfhh');
    table.json('xfiqsdywho');
    table.integer('ueugjkzwgf');
    table.integer('ytwqyxgfsi');
  });
  await knex.schema.alterTable('naxmfwbyxe', function(table) {
    table.boolean('hfzwhxeuzo');
    table.boolean('inwazimkdm');
    table.text('whwsbusmwr');
    table.string('moyuhwdkdt');
    table.string('kubpvlxegc');
    table.boolean('rwwtgvpyly');
  });
  await knex.schema.alterTable('jwvectvfvm', function(table) {
    table.text('ganwscwfig');
    table.float('jrowdxeqjp');
    table.bigInteger('iijkgrdntn');
    table.float('rxrhcswbeu');
    table.string('fcnluchcpz');
    table.float('mdhuylfwge');
    table.integer('zsjgodhmwk');
    table.string('novkjgdptc');
    table.bigInteger('njdgnnlsbo');
  });
  await knex.schema.alterTable('xezvmmnnza', function(table) {
    table.boolean('osnbzwirqq');
    table.bigInteger('liunhwjhcf');
    table.string('ezsoqviwfj');
    table.bigInteger('mcitjfiqlf');
    table.float('fpclgsikhy');
    table.timestamp('ioadxwynus');
    table.bigInteger('bacedlxzeg');
    table.bigInteger('vsiutpvdgn');
    table.integer('adjrphubdd');
  });
  await knex.schema.alterTable('khtiymcrmo', function(table) {
    table.integer('rwvpgcdcna');
    table.bigInteger('vzlilzsdhg');
    table.json('nanktxszsw');
    table.integer('ckwsqndwsm');
    table.text('ongodzivks');
    table.json('dkjhyzrwnt');
    table.text('exjuligshk');
    table.text('eroxjhzvdy');
    table.integer('ymwfiuyazv');
  });
  await knex.schema.alterTable('fwhalqufbp', function(table) {
    table.float('incokhclyr');
    table.timestamp('jovkribdyj');
    table.timestamp('yryfvrntpf');
    table.json('bbowdusmro');
    table.text('dclnxyfrkb');
    table.timestamp('gvvzelgmwf');
    table.string('zpowjxzftt');
    table.bigInteger('vibjokjffb');
  });
  await knex.schema.alterTable('nhafrmnlwu', function(table) {
    table.timestamp('ulcsdnscdb');
    table.text('bspudidntv');
    table.integer('rtpyfjrwfk');
    table.bigInteger('vmwfpkxgpw');
    table.float('rcvnybloci');
    table.string('jnualrdkdl');
    table.text('qcksovklbj');
    table.string('gvqwjqswaz');
  });
  await knex.schema.alterTable('yjxxghbpij', function(table) {
    table.timestamp('gyocaqdhtr');
    table.bigInteger('qbhleugvgp');
    table.boolean('fikhwamvbd');
    table.integer('zvckyscarv');
    table.boolean('vtbgkafobt');
    table.integer('wbzgkqakdp');
    table.string('adskrjzgmd');
  });
  await knex.schema.alterTable('xehgmccicm', function(table) {
    table.json('dtlnlwpggx');
    table.float('cdrlcktytg');
    table.bigInteger('mrkxftulhp');
    table.float('ccebqtxljh');
    table.json('xelgpbgexr');
    table.text('spxekjxaju');
    table.boolean('rwiusiqcps');
    table.text('ypdzqoapxw');
    table.float('yzmskyehbh');
  });
  await knex.schema.alterTable('wybsvbzaop', function(table) {
    table.json('qcgpqcbheu');
    table.float('cppehdxhli');
    table.bigInteger('cdlrjsmfng');
    table.float('jreyttlhdc');
    table.string('zetdakosrp');
  });
  await knex.schema.alterTable('thetusuugc', function(table) {
    table.bigInteger('rrlytckpuf');
    table.string('pwuhyjtwfg');
    table.timestamp('nrmtvmnknt');
    table.float('mxtwhvkvnt');
    table.json('cjakgoidgo');
  });
  await knex.schema.alterTable('jviurvfflp', function(table) {
    table.bigInteger('zcaqkagnih');
    table.text('rcwhyibuhq');
    table.json('jcispxhvda');
    table.text('umrjxapljv');
    table.bigInteger('kzrwsvofrf');
    table.boolean('ksqwdqdrep');
    table.boolean('javqqhbzbv');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};