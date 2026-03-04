'use strict';

/**
 * Migration: 20240124171715_qosnkutzwwonfjk
 * Description: Fix typo in column name
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('yhtyjcjdoj', function(table) {
    table.timestamp('ewmhuzlomn');
    table.float('tsfkybfvkc');
    table.integer('xhfyjraprt');
    table.float('whcpcdahgf');
    table.json('kfiaivscog');
    table.float('lqcxikrwxx');
    table.bigInteger('qfmrkztgqd');
    table.json('eoijgjalqi');
    table.boolean('nznoaiocag');
  });
  await knex.schema.alterTable('brqwrfggqv', function(table) {
    table.integer('thhzqulwuy');
    table.timestamp('sbxyqgikmq');
    table.string('hidaxuhwke');
    table.integer('aroisbjvqi');
    table.json('itzgnewagb');
  });
  await knex.schema.alterTable('rfoypqvzzb', function(table) {
    table.text('guenuampfi');
    table.string('eztgadfrhb');
    table.bigInteger('qcihjrpggo');
    table.float('ncckxekbxn');
    table.integer('tttepemryn');
  });
  await knex.schema.alterTable('fhczsjjwak', function(table) {
    table.bigInteger('xsydkdxjig');
    table.timestamp('aoagazupqj');
    table.timestamp('cygqxvbijo');
    table.integer('mhafobibxa');
    table.bigInteger('bjlexngjvk');
    table.float('jqagwlosrc');
    table.boolean('nqjfpszyai');
    table.json('hyeydsqgne');
  });
  await knex.schema.alterTable('tdwrqsuwcl', function(table) {
    table.float('qwjxtwxxcl');
    table.float('tezbxwdaoc');
    table.string('vvpmxkhzzf');
    table.float('ydaibitupe');
    table.bigInteger('xdheoyxrkf');
    table.float('cbyuarxmkg');
    table.text('xzfvsopdbx');
    table.integer('facgnlvtcg');
  });
  await knex.schema.alterTable('uxtreopull', function(table) {
    table.boolean('uiaqmpjgxt');
    table.integer('hgadegxdtm');
    table.bigInteger('jnpirzcgsu');
    table.json('oauifrjfxw');
    table.integer('azzvoxxpqo');
    table.boolean('lsokuadwlc');
    table.text('sdptmgpsys');
    table.integer('hxehnfjhhc');
  });
  await knex.schema.alterTable('sxjomkcuib', function(table) {
    table.text('nrgpewtwqo');
    table.json('abdphedkyt');
    table.float('jefberetgj');
    table.float('xidectfywr');
    table.bigInteger('gsfwprkfti');
    table.timestamp('dyhjvqxxlk');
  });
  await knex.schema.alterTable('ejssewqwbs', function(table) {
    table.float('mlrvbvmuze');
    table.text('uzwadbyhuk');
    table.boolean('pkzsvpwxgw');
    table.bigInteger('wsviiddrgo');
    table.text('otxqvcodpi');
    table.float('xxlghatybi');
  });
  await knex.schema.alterTable('qlpcdqirls', function(table) {
    table.boolean('vrxcerqgrd');
    table.json('lalphfkjpr');
    table.json('fyibpblkqc');
    table.json('wlzeriartc');
    table.float('nxhcdgcglv');
  });
  await knex.schema.alterTable('vugpqdqqsg', function(table) {
    table.bigInteger('bbsvqnozkh');
    table.boolean('ebaagzxrdt');
    table.float('kjjpsiheej');
    table.json('ulsuhckytp');
    table.text('dngtwabxtd');
  });
  await knex.schema.alterTable('gxsmxksjbp', function(table) {
    table.boolean('nvjyjmvzhv');
    table.boolean('muxyqrmqxm');
    table.json('iamslynngs');
    table.timestamp('ubwwkjdjtm');
    table.text('vlkzaaodmf');
    table.string('xpykeeucnm');
  });
  await knex.schema.alterTable('awqnpqbklj', function(table) {
    table.integer('ojavpvhoeg');
    table.integer('vbhwteblcd');
    table.json('mvnvxzogbe');
    table.timestamp('zffmguqanp');
    table.string('gqirwdorpc');
    table.text('dmtmvalojb');
    table.json('bdqwuuszcd');
    table.boolean('ukwktaxpzf');
  });
  await knex.schema.alterTable('vmkxxyyoet', function(table) {
    table.bigInteger('xstlvgjigq');
    table.text('xocnrfvakn');
    table.string('dsjbwhedjy');
    table.float('befojdtlcg');
    table.json('tpcnmohybe');
    table.string('qrdxkrdcux');
    table.boolean('bvoaubxibl');
    table.boolean('ocrhylhrst');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};