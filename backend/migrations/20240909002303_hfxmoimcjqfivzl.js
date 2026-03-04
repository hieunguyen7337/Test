'use strict';

/**
 * Migration: 20240909002303_hfxmoimcjqfivzl
 * Description: Rename field
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('vrwceoxzhq', function(table) {
    table.text('kyljechigd');
    table.string('oeayglurcb');
    table.boolean('dwssqjgfcn');
    table.string('hsrngtbtrv');
    table.boolean('whksutsosq');
    table.boolean('vlrwhghpod');
    table.text('qpedlbmthf');
    table.text('dngbqmvion');
    table.timestamp('oaqdvjvwtj');
  });
  await knex.schema.alterTable('gqiwihjaxp', function(table) {
    table.integer('qlifvtafks');
    table.timestamp('ksrdedodgm');
    table.text('ugnjnrpdjx');
    table.text('hbtdtdagml');
    table.float('tryxmfpjvg');
    table.string('vbdytrgckv');
    table.json('fppqyizpvg');
  });
  await knex.schema.alterTable('kbwavrwfio', function(table) {
    table.integer('qgckojonxl');
    table.timestamp('cukxjresup');
    table.float('bbjgdwsinv');
    table.float('xbpnzhmklv');
  });
  await knex.schema.alterTable('fjhwpuzqbu', function(table) {
    table.json('evquuvuiip');
    table.json('fiwlldweml');
    table.integer('jtjhtzdpko');
    table.bigInteger('dcpwkqabep');
    table.timestamp('hcvasrklmj');
  });
  await knex.schema.alterTable('hadqqxuaua', function(table) {
    table.bigInteger('lzklyrheqp');
    table.float('irjkxrppev');
    table.text('kiasnykvzd');
    table.text('sfzzaosfmh');
    table.string('wcrrfltxqx');
    table.float('ddcryayzit');
    table.float('zjfqzmobho');
    table.text('wxkuavlbno');
  });
  await knex.schema.alterTable('ehksilyvnu', function(table) {
    table.integer('zrzywkspdu');
    table.integer('fubeidudbv');
    table.string('rzimejgoco');
    table.timestamp('ocpuehhgsx');
    table.text('jyustuxmsz');
    table.text('mnhudjxewq');
    table.string('nmwxaihnnt');
    table.integer('xhhyqhazed');
    table.json('ylnohfxdla');
  });
  await knex.schema.alterTable('oonjyevapg', function(table) {
    table.text('lfdjfwpzdm');
    table.integer('fgzhancmmj');
    table.timestamp('ayyhsmoavh');
    table.string('otsdfcbdbq');
    table.text('iovbkppwak');
  });
  await knex.schema.alterTable('hfqdwppltz', function(table) {
    table.boolean('rfjhzlvxqj');
    table.json('huhlfvfzdo');
    table.boolean('pbagwqdpsp');
    table.boolean('eeqykglkex');
    table.integer('gajpubaafi');
    table.text('yvamschbwl');
    table.timestamp('ddnucuptyv');
  });
  await knex.schema.alterTable('aysdvaindn', function(table) {
    table.json('ksbzwyrlzn');
    table.json('hbqxjbmwhs');
    table.bigInteger('ktudrlrxsa');
    table.integer('lhheyspome');
    table.boolean('phcqfluwhx');
    table.text('yhvgykwjpw');
    table.json('skgtswqshs');
    table.text('mvnxlupzlk');
  });
  await knex.schema.alterTable('qswvuecjcb', function(table) {
    table.timestamp('ocusrfeoxi');
    table.boolean('goujjwwfmf');
    table.string('udggzpghzn');
    table.bigInteger('tlxgzooamc');
    table.float('clfjsdtzrb');
  });
  await knex.schema.alterTable('okzlpnixoo', function(table) {
    table.bigInteger('wgxchcgpgp');
    table.timestamp('lauetxqwxw');
    table.integer('ucewzddtja');
    table.bigInteger('bwagpjfupi');
    table.float('efqkljsiuw');
    table.bigInteger('yjbrbcttgt');
    table.bigInteger('vgitgtbpxw');
    table.bigInteger('pslgayeizo');
  });
  await knex.schema.alterTable('imxnmgaumz', function(table) {
    table.bigInteger('yeoylyayic');
    table.float('ronpyrsooi');
    table.boolean('mdibckijof');
    table.string('atcoepuadd');
  });
  await knex.schema.alterTable('uwcabdavni', function(table) {
    table.float('mbaracrqmo');
    table.float('grpzktfjfw');
    table.timestamp('nguevamkym');
    table.boolean('tzgnpmpzvb');
    table.integer('etsgbkvntl');
    table.bigInteger('bywziyvpaw');
    table.text('nfsqhnvbcg');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};