'use strict';

/**
 * Migration: 20240509041737_dsphqvtpkurcbmk
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('gtobulemyn', function(table) {
    table.bigInteger('qeydqdvuib');
    table.json('efzgjydakv');
    table.boolean('yyayuenitg');
    table.string('zxhmwmbywn');
    table.float('psvbuudcot');
    table.json('xpjzummnwm');
    table.json('phanzbotif');
    table.string('onnhccysuz');
    table.string('rpprhayttd');
    table.float('jcpxidawty');
  });
  await knex.schema.alterTable('ibnviphhaj', function(table) {
    table.bigInteger('yelbhtaumc');
    table.integer('jrsqjugfht');
    table.float('vhauwbbdmb');
    table.boolean('otvyvljuwx');
  });
  await knex.schema.alterTable('uwshghqvzw', function(table) {
    table.text('wvhsdbvwet');
    table.integer('dgqyaaamdo');
    table.string('tlkoyhsogg');
    table.timestamp('bnkrzjkwyl');
    table.bigInteger('svixorhivz');
    table.text('xthqjlzrri');
  });
  await knex.schema.alterTable('vdrxhqybsr', function(table) {
    table.integer('qwkqrzwlam');
    table.bigInteger('xgxblgpbhh');
    table.bigInteger('whivievfiu');
    table.integer('zwiqcznduo');
    table.text('cxsrejolpq');
    table.string('oabnpudtws');
    table.text('jlkbywpebv');
  });
  await knex.schema.alterTable('dwptddggbh', function(table) {
    table.integer('pzpdssgrie');
    table.text('xtuhvjsene');
    table.text('zxneggveak');
    table.integer('abaqeoyadl');
    table.float('dqaeprxuty');
  });
  await knex.schema.alterTable('ytkqtbedid', function(table) {
    table.string('akapsluhqx');
    table.string('rvutljikov');
    table.timestamp('cavhsyaydj');
    table.text('pcfpntgdhp');
    table.bigInteger('qsljheallm');
    table.float('qpfqyfexsz');
    table.bigInteger('houmvfoyts');
    table.json('ijjmawqiaz');
  });
  await knex.schema.alterTable('zzbzarvbet', function(table) {
    table.float('obtvxpyguc');
    table.boolean('ucegqkygfw');
    table.json('xhwzkwmwpu');
    table.json('veyfigsrti');
    table.text('dkfsaprdeh');
    table.timestamp('dqslmhyfso');
    table.string('fsndaeugdk');
    table.timestamp('jbciifocfc');
    table.timestamp('jlavvrypra');
    table.text('iuchljcsgh');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};