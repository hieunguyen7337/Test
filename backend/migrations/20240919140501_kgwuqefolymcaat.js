'use strict';

/**
 * Migration: 20240919140501_kgwuqefolymcaat
 * Description: Fix typo in column name
 * Author: merge conflict survivor
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('maivwpvfun', function(table) {
    table.bigInteger('bihnvzhyaq');
    table.bigInteger('goflyibnwd');
    table.bigInteger('kzghkubtdu');
    table.bigInteger('fuegmatoyt');
  });
  await knex.schema.alterTable('bgnujqtbiw', function(table) {
    table.float('wvxbmrvbaj');
    table.boolean('etagshxqyr');
    table.integer('ugtcywucht');
    table.text('vrkshlzxpa');
    table.string('lwsrbpprom');
    table.text('xzehfdrveq');
    table.timestamp('qpmdmoemyo');
  });
  await knex.schema.alterTable('vkocfltjxu', function(table) {
    table.text('mtbolxquew');
    table.bigInteger('usfdmfxzak');
    table.bigInteger('vfcojchgzb');
    table.float('bcxqaylwik');
    table.float('ojyngkwipp');
    table.float('bodjtcdjnr');
    table.text('zulgqimikb');
    table.string('zjbnaurhiy');
  });
  await knex.schema.alterTable('skhvkiypzv', function(table) {
    table.boolean('amhuynggmh');
    table.integer('wiynwjkdcb');
    table.json('teabdeacbn');
    table.float('emeuuesujk');
    table.timestamp('iqtamhdeux');
    table.bigInteger('bhqixjwbgq');
    table.integer('rkjkfegqxx');
    table.text('souwookrls');
    table.json('tdhxazccck');
    table.string('ijofagipqg');
  });
  await knex.schema.alterTable('yzqikpqdee', function(table) {
    table.bigInteger('ifvucqufug');
    table.integer('cwoyocakyw');
    table.timestamp('mieeruxgiz');
    table.text('smtecmwcja');
    table.float('amggvnuecn');
    table.float('ublifhiora');
    table.boolean('hpjenqarxc');
    table.timestamp('okmpfhzecj');
    table.json('ccviermicf');
    table.string('fmdcxifmiy');
  });
  await knex.schema.alterTable('ckqvizkekl', function(table) {
    table.timestamp('wipaxqymlr');
    table.timestamp('poulymwnom');
    table.bigInteger('rgoenmfnoe');
    table.json('sjoffmdinv');
    table.integer('umqfrvgqao');
  });
  await knex.schema.alterTable('rigqvjqfdr', function(table) {
    table.string('wrxtwfxcnm');
    table.timestamp('bjlgmbohur');
    table.bigInteger('vqgguheaif');
    table.text('uocnmvamsc');
    table.integer('zakniojapo');
    table.string('wyayihvohh');
    table.timestamp('dnbvsectgm');
  });
  await knex.schema.alterTable('qlyhdzurzn', function(table) {
    table.float('jkaaohykrv');
    table.json('sfsmgcbroy');
    table.float('bzsoltywti');
    table.timestamp('dydairhwwz');
    table.boolean('ybospljoll');
  });
  await knex.schema.alterTable('xpovgpsdxb', function(table) {
    table.text('tiipddtyei');
    table.timestamp('rukfjunujv');
    table.text('rforiugwsj');
    table.timestamp('hiujnbcenl');
    table.json('akaiwszjxx');
    table.text('prefnlzlyd');
    table.string('keymbkmtqz');
  });
  await knex.schema.alterTable('lfgfugvkzc', function(table) {
    table.integer('wrohzliolp');
    table.bigInteger('pmkbxfsjup');
    table.bigInteger('uxqfjbtkui');
    table.boolean('yvrpgkxrgs');
    table.text('fdhyoakvci');
    table.text('wtioqsrvhi');
    table.string('ispvuroosx');
    table.integer('unalegugid');
    table.boolean('ktkjjzqepv');
  });
  await knex.schema.alterTable('sodfcdkfzh', function(table) {
    table.json('izprguifym');
    table.json('jgirbagomp');
    table.float('jzzzpiqtzd');
    table.json('cwtqasqsxp');
  });
  await knex.schema.alterTable('mzfgbzbwhj', function(table) {
    table.timestamp('bwvlpeteac');
    table.float('fjpyoptoyi');
    table.text('arofhngnyt');
    table.integer('aeogbkbikr');
    table.json('oggumuykqu');
  });
  await knex.schema.alterTable('fgtcyipdeq', function(table) {
    table.boolean('wwapkppzah');
    table.float('nrjmdgcqdk');
    table.string('wibbsawrzq');
    table.integer('ygrcjndwrh');
    table.timestamp('uowwvzyqkl');
    table.timestamp('khdkjvarry');
    table.float('srbvudmwno');
    table.float('acxoylroff');
    table.bigInteger('atonvurvsc');
  });
  await knex.schema.alterTable('gplzptqzdu', function(table) {
    table.json('gaomzdmrzx');
    table.timestamp('gfzemjjjwe');
    table.bigInteger('xnirsmqapk');
    table.bigInteger('oplkkjxtyt');
    table.boolean('rllwaujeni');
    table.boolean('mtbltpqbaq');
    table.text('fiuesoogkb');
  });
  await knex.schema.alterTable('grfqdztsjd', function(table) {
    table.boolean('gjnxfavxgx');
    table.timestamp('bfjtfizqbk');
    table.integer('yvqcfqqaig');
    table.json('hjbljpmwrz');
    table.float('tgetdxdgoz');
  });
  await knex.schema.alterTable('cgxxjsoovp', function(table) {
    table.float('ybtnpboyht');
    table.timestamp('jxwnvbnczq');
    table.text('vdcvjrefjr');
    table.bigInteger('cfjeaqbpbd');
    table.json('qzkxhjfbpp');
    table.integer('htoixrpqly');
    table.bigInteger('bgebspyugn');
    table.boolean('krglxbpzya');
    table.text('clxxnwhapn');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};