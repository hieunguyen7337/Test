'use strict';

/**
 * Migration: 20240619084039_bmgvsthibqfmbew
 * Description: Remove column
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('kzbpuiwtzq', function(table) {
    table.text('bzrrtovsvo');
    table.text('rbahfmemzc');
    table.string('fwgrirkixq');
    table.timestamp('ztqsqfdibq');
    table.string('ocvpmygkab');
    table.boolean('egrboxquqt');
    table.text('vrnhwufvoi');
    table.integer('hkhonhpwjq');
  });
  await knex.schema.alterTable('kunpzlqpjm', function(table) {
    table.json('lndvwxlayj');
    table.integer('ewvxmlmqwo');
    table.integer('qlgutubxzq');
    table.integer('obtnvsktzz');
    table.json('ulfbnqnphq');
    table.json('kuzyxpxyhi');
    table.text('dvtfrvgkkl');
  });
  await knex.schema.alterTable('lsbyzzxzrj', function(table) {
    table.json('zftoramzyp');
    table.text('hznnyyadlk');
    table.json('xqktzqrvdw');
    table.json('qjtajwmrzl');
    table.timestamp('fysozfasdw');
    table.text('rqkntnsgrj');
    table.json('kpxiuetvev');
    table.float('mfuzoorylu');
    table.json('nhtyyskewr');
    table.json('vbnpidiyoz');
  });
  await knex.schema.alterTable('ejmkpjrrwj', function(table) {
    table.timestamp('egwppzgmrr');
    table.integer('qspoqslqlq');
    table.json('nfxuvknxel');
    table.string('nqxqxatjrz');
    table.float('fyxbaeumnh');
    table.integer('cvouszwwlx');
    table.float('xngoelaegu');
    table.boolean('ubzulrhdyr');
  });
  await knex.schema.alterTable('qbcbipcqew', function(table) {
    table.json('yimjulzwoz');
    table.float('snnzhwcayl');
    table.integer('kunxsqwhls');
    table.text('mikuqnvrks');
  });
  await knex.schema.alterTable('bbbwoesjba', function(table) {
    table.timestamp('lygjuyzkkb');
    table.boolean('yfhylbnbth');
    table.text('sgvjpiiert');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};