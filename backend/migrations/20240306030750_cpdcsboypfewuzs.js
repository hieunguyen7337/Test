'use strict';

/**
 * Migration: 20240306030750_cpdcsboypfewuzs
 * Description: Drop table
 * Author: the intern
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('liwqverfcu', function(table) {
    table.text('owuomozhzn');
    table.json('qqrkfbmpba');
    table.float('pkusrwoxvg');
    table.timestamp('dbzytsicci');
    table.float('llwfmegmvp');
    table.bigInteger('pcmwqiszwl');
    table.bigInteger('yvmwfrtzbb');
  });
  await knex.schema.alterTable('idbzqezcuo', function(table) {
    table.float('zrasoodxng');
    table.json('hmfqybytmw');
    table.string('xtolcmeoun');
    table.bigInteger('jltyhcbxfe');
    table.text('gczmuwcfwd');
    table.json('fubrnucqhh');
    table.integer('idhxolgmfa');
    table.integer('cmmoegcxea');
    table.float('ssryjigkqs');
  });
  await knex.schema.alterTable('xtyhgpembl', function(table) {
    table.integer('pmrakjqphh');
    table.text('wpmmxxphla');
    table.integer('iaxjwmbfxj');
    table.float('hkztuoviqn');
    table.string('plkzrcpmcd');
    table.timestamp('teywbfrnxr');
  });
  await knex.schema.alterTable('fcjkvvqfeb', function(table) {
    table.integer('qpewkjgbdu');
    table.string('hsoenokriy');
    table.bigInteger('liaofpqzju');
    table.bigInteger('vjqdhjjvtw');
    table.float('mnnlzglsba');
  });
  await knex.schema.alterTable('rzocuzctut', function(table) {
    table.bigInteger('zxdpcnvttr');
    table.float('zyeaewekin');
    table.timestamp('ymuhuyujqo');
    table.timestamp('wgrwjisjfu');
    table.float('gufkcuhsgn');
  });
  await knex.schema.alterTable('fihmsimwos', function(table) {
    table.timestamp('ypqgtshtzz');
    table.text('uglscraezp');
    table.bigInteger('qlcukcvmqt');
    table.integer('rkwqgesacb');
    table.string('aoaoknjkex');
    table.integer('wvhfrniefc');
    table.boolean('sfhiticfde');
    table.bigInteger('jhvalyizfm');
    table.integer('fqqnhqsabt');
  });
  await knex.schema.alterTable('expmcyevyx', function(table) {
    table.text('guasvlgajt');
    table.integer('hqcflndosq');
    table.text('rofiupjxff');
    table.boolean('nilkjgpcki');
    table.json('elwcyzjenj');
    table.json('nwcszuhqyu');
    table.json('zipjtbyqrl');
    table.text('yztgmgpbul');
  });
  await knex.schema.alterTable('euihzcwqns', function(table) {
    table.integer('viijdsnfxv');
    table.json('joqtqdxesj');
    table.float('bcydezzpcj');
  });
  await knex.schema.alterTable('ndzmfexiqu', function(table) {
    table.float('rbgwkfezjz');
    table.string('gpnwccimzh');
    table.text('cnsazifepr');
    table.boolean('hmiuewjgwu');
    table.bigInteger('sxlsguhmuv');
    table.text('cperwyjfot');
    table.timestamp('zsfjsvmorp');
    table.integer('abkgvpbosm');
    table.bigInteger('noroumzbpv');
    table.timestamp('sldtrhedge');
  });
  await knex.schema.alterTable('tsdscvaqki', function(table) {
    table.timestamp('mefqhwmzmp');
    table.boolean('itwolmawod');
    table.json('lmrkfpeguh');
    table.boolean('uqwpfyoedg');
    table.text('iukduvvlsf');
    table.string('rvmjnerxib');
    table.bigInteger('buboexjahl');
    table.text('pljyicbmiu');
    table.text('beoubgtaza');
  });
  await knex.schema.alterTable('ncwhvkiytk', function(table) {
    table.timestamp('sxgynphtbm');
    table.bigInteger('imgeddssoj');
    table.integer('ytzxwhzovh');
    table.json('knjpposkmr');
    table.json('iebrdijhqi');
  });
  await knex.schema.alterTable('govgcrtlmw', function(table) {
    table.boolean('hbkdsjynms');
    table.integer('zdghuqlavi');
    table.bigInteger('kageyaazsx');
    table.json('jidmselsym');
  });
  await knex.schema.alterTable('bczqkoyuie', function(table) {
    table.text('qcapupyaww');
    table.bigInteger('sxhbbrbxqh');
    table.timestamp('ibrgvniiqr');
    table.boolean('nmkqhjdoqm');
    table.boolean('ifsmpgimhm');
    table.bigInteger('pvpvpczbzg');
    table.integer('tsxelipdsm');
    table.boolean('fnfduqsbzx');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};