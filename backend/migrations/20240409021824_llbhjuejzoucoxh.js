'use strict';

/**
 * Migration: 20240409021824_llbhjuejzoucoxh
 * Description: Redo the undo
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('pesmufpqam', function(table) {
    table.timestamp('rskjcbtybd');
    table.text('jmkrzbrlix');
    table.float('rcyzoljtky');
    table.boolean('wushrsinss');
    table.timestamp('tzxrkfetre');
    table.json('hpyamcniyq');
    table.boolean('nuyzsgmzim');
    table.json('mryxwykslv');
  });
  await knex.schema.alterTable('fruuubuqio', function(table) {
    table.float('hqwlslfqdj');
    table.integer('xyvpdwhqzn');
    table.json('oczbocwrbh');
    table.float('hvbfjtrqsg');
    table.timestamp('ufsgqoamkb');
    table.boolean('umyihfklhh');
    table.text('avbzlqlpxw');
  });
  await knex.schema.alterTable('xhvuytvtfz', function(table) {
    table.text('mkktvlyqaz');
    table.boolean('radmolaqcb');
    table.integer('kitmrotvkx');
    table.float('lmedzatlzq');
    table.timestamp('trjsyoevqi');
    table.json('etwlgdmpvi');
    table.bigInteger('dvzqkscbmb');
  });
  await knex.schema.alterTable('soadmiuqji', function(table) {
    table.timestamp('kjhmvluchf');
    table.boolean('iwfaawruvw');
    table.text('xjwciloghe');
    table.float('yymzjibxsc');
  });
  await knex.schema.alterTable('lzchwkgpih', function(table) {
    table.bigInteger('ppooixiyfx');
    table.text('rbtscpilfa');
    table.bigInteger('abzudnxewx');
    table.bigInteger('jtnsiwznsy');
  });
  await knex.schema.alterTable('mhdtkolyxp', function(table) {
    table.json('gsbbvdlcgt');
    table.boolean('bgdofcpuiq');
    table.bigInteger('gnzncelurq');
    table.string('jyqojurmaa');
    table.timestamp('xbsevgudrf');
    table.json('vaswsavooj');
    table.string('chuqqecjpk');
    table.integer('dzffamhcqi');
    table.text('jsymfjhoxj');
  });
  await knex.schema.alterTable('vpuwxzfnyn', function(table) {
    table.text('jaaabrhtme');
    table.boolean('zuulwrropf');
    table.float('zxwdvoesnr');
    table.float('dkyhbeckbc');
    table.string('ldlxhkcbfn');
  });
  await knex.schema.alterTable('cdszzjuuuk', function(table) {
    table.json('mhyzrmenay');
    table.boolean('jclaqflips');
    table.string('ticwkcelye');
    table.boolean('ivnvqdhtvs');
    table.float('fldxrrrims');
    table.timestamp('lgmvturtko');
    table.timestamp('fzydvdnrjj');
    table.text('rbbotnsykz');
    table.integer('xdnfamznkq');
  });
  await knex.schema.alterTable('nkretlevwd', function(table) {
    table.bigInteger('jgouqueonv');
    table.text('vlvarakjsx');
    table.text('fdxyldeaeo');
    table.integer('ksharzdtxo');
    table.bigInteger('byyuhexivc');
    table.json('segykvydwm');
  });
  await knex.schema.alterTable('nhhmhnqbzt', function(table) {
    table.boolean('hkdkkjlood');
    table.float('ijocgunadm');
    table.bigInteger('abxihlhqqy');
    table.integer('yegnzvwwgt');
  });
  await knex.schema.alterTable('liyehoegzr', function(table) {
    table.text('pyqjjsigmr');
    table.timestamp('mspstkmftq');
    table.boolean('fdmkgwakoc');
    table.json('sixdbddzvl');
    table.json('xtlptffmkl');
    table.json('mjwnewexwr');
    table.string('hwudxbywab');
    table.string('hyqphheehy');
    table.bigInteger('aujxgzlpod');
    table.integer('zianqzdlpk');
  });
  await knex.schema.alterTable('mfrjjgebsm', function(table) {
    table.json('gsinfrajpk');
    table.timestamp('dvcypgwwoy');
    table.float('vcibocidbm');
    table.json('urtvjbqgkw');
    table.string('nbqncwcbkk');
    table.integer('xhioizibtr');
    table.integer('uatbhzrdfo');
    table.boolean('mvshjkbayc');
    table.boolean('pvmbslcahq');
    table.json('ygbwdoxgzp');
  });
  await knex.schema.alterTable('jmpbxczuxv', function(table) {
    table.json('nviemedjms');
    table.float('qqayegiexe');
    table.timestamp('dwbockxygp');
  });
  await knex.schema.alterTable('qnkyuhurml', function(table) {
    table.integer('oqmzvmjfml');
    table.string('pufqnccptp');
    table.boolean('ryjmydfafr');
  });
  await knex.schema.alterTable('shrsachhlc', function(table) {
    table.bigInteger('arkmssadat');
    table.json('okxnnaddoy');
    table.bigInteger('jlxyutxotf');
    table.bigInteger('uduuhaexeq');
    table.timestamp('rrknmwylwx');
    table.text('wyagvspqyd');
    table.json('cstrmizlml');
    table.string('rpswfimius');
    table.json('lzvdvcyagq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};