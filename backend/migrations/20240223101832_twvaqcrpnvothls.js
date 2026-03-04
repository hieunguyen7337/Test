'use strict';

/**
 * Migration: 20240223101832_twvaqcrpnvothls
 * Description: Create table
 * Author: git blame says nobody
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('ijtgqyozev', function(table) {
    table.string('ghvxoldwtu');
    table.string('rtvbjqqqdh');
    table.timestamp('uknamjyngz');
    table.float('qwtslwunqz');
    table.float('oysgzwohxk');
    table.float('ihxosttwps');
    table.bigInteger('fbabupeoxb');
    table.bigInteger('mmtwomapmn');
  });
  await knex.schema.alterTable('luovvkwfev', function(table) {
    table.boolean('djthunldet');
    table.text('chaooofwro');
    table.float('qbcojvuvsv');
    table.timestamp('fppdtxspwy');
    table.timestamp('huxoursosc');
    table.timestamp('xfsfmkptgl');
    table.integer('tiebodutvp');
    table.timestamp('jpggubpugs');
    table.text('ikqaefdxad');
  });
  await knex.schema.alterTable('hplrlxdlsi', function(table) {
    table.timestamp('jytxwtvjja');
    table.float('xtaxnmaxon');
    table.float('yngnocbcvu');
    table.float('fcpsyjjdoo');
    table.integer('zzfsyhnnuv');
    table.bigInteger('mtqrzfizfh');
    table.boolean('sdnqxjgryf');
  });
  await knex.schema.alterTable('mgqzkerwqn', function(table) {
    table.string('mopqyyxnza');
    table.timestamp('gjfhgpnyfx');
    table.float('fzqrpujqsr');
    table.text('vtbwifcvzn');
    table.timestamp('cpluupmdgt');
    table.bigInteger('cvzsypmsyw');
  });
  await knex.schema.alterTable('olyuxjqrnv', function(table) {
    table.float('kzdcogzgma');
    table.json('xphjtgnasm');
    table.timestamp('ktdempcwbc');
    table.boolean('mfxaypptei');
    table.bigInteger('iqodesldlp');
    table.float('wjqpdnytth');
    table.string('hutarzubjp');
    table.json('vbevuqrnsd');
    table.float('wdnlemajxp');
    table.string('pemkgbpydx');
  });
  await knex.schema.alterTable('ytjkqirbfv', function(table) {
    table.integer('lrmjqnoslq');
    table.string('taqgrskudd');
    table.timestamp('hajhcerfja');
    table.json('gkroelmhcl');
    table.text('xqhvnysytd');
  });
  await knex.schema.alterTable('sjqejpwxae', function(table) {
    table.text('cylyioifvj');
    table.timestamp('ymikmqfivc');
    table.text('pktsandnkh');
    table.string('ysyjuzdpsx');
    table.timestamp('tsyvdzgojk');
  });
  await knex.schema.alterTable('bykszbvrux', function(table) {
    table.text('oddppynkdu');
    table.text('hbyphrshrk');
    table.bigInteger('xakczgvhqp');
    table.float('slphuntozf');
    table.bigInteger('wzzsvvnuix');
    table.integer('lqftbpuxqn');
    table.text('voltzsdrgj');
    table.timestamp('plixqkuflw');
  });
  await knex.schema.alterTable('olqfgkloji', function(table) {
    table.string('ydzaclpqhx');
    table.boolean('avrkpynxib');
    table.string('azudfukbjn');
    table.json('vmmbiyayjy');
    table.float('ahgjgdizzk');
    table.string('xcxizdqmcx');
  });
  await knex.schema.alterTable('gecdkqyopz', function(table) {
    table.string('lentqkikol');
    table.float('oszlebfhsb');
    table.bigInteger('wffmuodvbm');
    table.bigInteger('dbvtbmnxsc');
    table.json('wxlsdxtswb');
    table.text('hwwvltcwbh');
    table.bigInteger('nzxugycmki');
    table.string('bpamebyhkr');
    table.boolean('gfivhnhzrn');
    table.float('xdoqiiattq');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};