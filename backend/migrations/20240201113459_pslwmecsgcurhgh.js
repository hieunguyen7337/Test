'use strict';

/**
 * Migration: 20240201113459_pslwmecsgcurhgh
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('aeiojwwlbw', function(table) {
    table.boolean('fwozuzfjpx');
    table.float('ywyfavujwj');
    table.boolean('rqbwvetmvb');
    table.float('xlhcwnhbbl');
    table.text('qcvaoqkutw');
  });
  await knex.schema.alterTable('shriierqbg', function(table) {
    table.text('zvxzjgwaog');
    table.text('dnhfqghgfj');
    table.timestamp('ljapjgabvi');
    table.json('pkpelbrfcr');
    table.string('kkrmccnfbp');
    table.boolean('pivxrazbmu');
  });
  await knex.schema.alterTable('tofhjidhsz', function(table) {
    table.json('peczsixday');
    table.integer('necezuxhwx');
    table.text('kaotpgolyx');
    table.string('vauaijktms');
    table.float('skqzrzkqpr');
    table.string('fuzqenhcks');
    table.bigInteger('ewzhjgehjl');
    table.integer('tgyaalbewu');
    table.timestamp('azvrkpvqtm');
  });
  await knex.schema.alterTable('snkcoxvftj', function(table) {
    table.json('enhyqziacb');
    table.string('ivunvmeiqa');
    table.bigInteger('roqzhraznn');
    table.integer('henqgxrken');
    table.json('cwmjemldxd');
    table.string('whbsxrxenl');
    table.bigInteger('xntwclbamt');
    table.bigInteger('hgknoolnmi');
    table.integer('uysksnkyrg');
    table.timestamp('xamukcizxt');
  });
  await knex.schema.alterTable('yfzmevbztr', function(table) {
    table.bigInteger('hoyekslhuk');
    table.text('clgpmjrqys');
    table.boolean('odlzlteqhp');
    table.timestamp('duxpdaliro');
    table.json('dswezebwwx');
    table.timestamp('rxwbnrbptr');
    table.boolean('grxatwydrm');
    table.integer('vppzhgnill');
    table.json('lcnmywhpaa');
    table.float('vzzubrytcq');
  });
  await knex.schema.alterTable('pzkaaxslri', function(table) {
    table.float('extbjjtlqs');
    table.float('lnodauyvue');
    table.float('rufmnyvnuh');
    table.boolean('mrbahoacau');
    table.boolean('akzdgcauye');
  });
  await knex.schema.alterTable('dihkrfnyvh', function(table) {
    table.string('zejdslogmd');
    table.text('ghiuaqjrcd');
    table.json('bxpjpuswls');
    table.json('tenfnsqayp');
  });
  await knex.schema.alterTable('mxcmgbyoxv', function(table) {
    table.json('upbwhczdva');
    table.timestamp('thwvdoipdn');
    table.bigInteger('fajbtavvxy');
    table.boolean('pewwpxvoyf');
    table.json('cngjpdtfoh');
    table.float('switoeltic');
    table.integer('tzulqhffyv');
    table.float('fdiektvquj');
    table.bigInteger('zwtoqjckvd');
    table.timestamp('znqvxuhokg');
  });
  await knex.schema.alterTable('uhcpqnxzqt', function(table) {
    table.integer('walwbmzhve');
    table.string('ymhmcmtnou');
    table.string('pyzsontbaw');
    table.json('vntujzvhzv');
    table.boolean('qtjemjteas');
    table.integer('dfacabkssr');
    table.string('dnynzoeynn');
    table.timestamp('yjhgjlppod');
    table.float('kreklamoxi');
    table.text('pyyqgajoey');
  });
  await knex.schema.alterTable('tuqtacywah', function(table) {
    table.json('fjyotpkarg');
    table.integer('ozugprjxne');
    table.json('zrrvpwaeta');
    table.float('duxaeihmcl');
  });
  await knex.schema.alterTable('tmnkdiaqoy', function(table) {
    table.bigInteger('qqxhtiprdy');
    table.integer('bfpaplqesg');
    table.float('lnkgshyhwg');
    table.integer('mxsknehwbz');
    table.bigInteger('kynokjsand');
    table.bigInteger('nsznekfgul');
  });
  await knex.schema.alterTable('jtzaoafxoq', function(table) {
    table.json('rabbpqhgjp');
    table.float('avoesxxoxb');
    table.timestamp('napdxwqvqr');
    table.boolean('qkgwxibeat');
    table.json('echgzpbzrc');
    table.string('ssarqvgnmi');
    table.text('kgibqspekl');
    table.text('dsnrxatmxa');
    table.boolean('lhlmosulxd');
    table.integer('ymdkbbjqcs');
  });
  await knex.schema.alterTable('etttuiawxj', function(table) {
    table.string('okojzknuyq');
    table.timestamp('gfhotnephz');
    table.boolean('iybsryafdh');
    table.bigInteger('veljpmmcsu');
    table.timestamp('pyhedpdvja');
    table.json('awojifzuqg');
    table.float('eklqzpalsp');
    table.timestamp('xudtlznwcy');
    table.text('euvzpxohur');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};