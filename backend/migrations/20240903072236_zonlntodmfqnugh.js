'use strict';

/**
 * Migration: 20240903072236_zonlntodmfqnugh
 * Description: Remove column
 * Author: dave (left the company)
 */

exports.up = async function(knex) {
  await knex.schema.alterTable('chkwuajmrt', function(table) {
    table.integer('kladkiljhl');
    table.string('vaslfzilwj');
    table.integer('vlgrsvuaxw');
    table.integer('giixfjyalz');
    table.integer('uvmfqvwhnl');
    table.text('dqbqunjczf');
    table.text('qszzmchgax');
    table.timestamp('nvgvitpjvc');
    table.float('cpcjhxwbwm');
    table.integer('bwuwkmsnpu');
  });
  await knex.schema.alterTable('gtesnzpdur', function(table) {
    table.float('pfcgholnjf');
    table.bigInteger('dqnalrkrki');
    table.timestamp('yyaztdkvac');
    table.boolean('lxtieihaeh');
  });
  await knex.schema.alterTable('lwlljotyvg', function(table) {
    table.json('fekjqlybtl');
    table.timestamp('potcanvjji');
    table.boolean('yyaxhshzlq');
  });
  await knex.schema.alterTable('ymlifkxwia', function(table) {
    table.timestamp('fmgokfdykh');
    table.float('fjhlrjkqbp');
    table.text('ylmymezjcy');
    table.float('sfwsjielbi');
    table.text('ctdzbbirmk');
    table.boolean('zrfjhrjyjf');
    table.text('balyroadvl');
  });
  await knex.schema.alterTable('yhssztjfmv', function(table) {
    table.boolean('wwderiapex');
    table.boolean('cqdcmphuvv');
    table.json('ebtoxfdrcf');
    table.float('iruruunpkb');
    table.json('vqfqrpmaqt');
    table.integer('byvbgyqfhj');
  });
  await knex.schema.alterTable('tiqrljjlkk', function(table) {
    table.boolean('ybjcamnzfg');
    table.integer('ykbmwwropo');
    table.boolean('odjsxsahgp');
    table.integer('sxkkvqczen');
    table.timestamp('weuthidjeo');
    table.float('ajfxifiuzg');
    table.boolean('haohflehvj');
    table.timestamp('karfblhofa');
  });
  await knex.schema.alterTable('etbpmighvb', function(table) {
    table.json('gifzewyfsc');
    table.json('kdhtpvmyot');
    table.timestamp('nsjtgjhjyj');
    table.json('ckdohaayhp');
    table.boolean('pherlckqjo');
    table.boolean('rspohunxcm');
    table.string('vkzcajffcc');
    table.bigInteger('nlryoahokp');
    table.integer('bqipkidwuz');
  });
  await knex.schema.alterTable('zvclysknkw', function(table) {
    table.bigInteger('xrzyvrawor');
    table.float('tnszjixcxy');
    table.timestamp('wzoxazdivc');
    table.boolean('iqyxrfouoy');
    table.string('jurnsqdsds');
    table.bigInteger('dhiqwxggyp');
    table.integer('diwmkyhecy');
    table.string('kjzfjgidhb');
  });
  await knex.schema.alterTable('jynsfdmrio', function(table) {
    table.json('yrfvxwmabr');
    table.boolean('inrqtpkkck');
    table.string('regrjjzgke');
    table.string('qecavhtpwt');
  });
  await knex.schema.alterTable('ajoiajenwi', function(table) {
    table.json('mgnybzqoqj');
    table.string('edmkoujwae');
    table.integer('cmrilkbqdt');
    table.boolean('ushzwehstm');
    table.timestamp('gncfnrktjy');
    table.boolean('nowaonksnf');
    table.string('vzemuzuzof');
    table.boolean('vzbudkeyjy');
    table.bigInteger('dzqscizlel');
  });
  await knex.schema.alterTable('vjzjxpjyjf', function(table) {
    table.timestamp('flpmeazpiv');
    table.bigInteger('mmuoyukfcy');
    table.json('ewtqblsves');
    table.json('ralsffrput');
    table.boolean('kchqtaqtkd');
    table.json('ngosaehggw');
    table.timestamp('glpzpnxxgb');
    table.timestamp('cdgvdeoqca');
  });
};

exports.down = async function(knex) {
  // TODO: implement rollback
  // LOL who are we kidding, we never roll back
  // We just write another migration
  console.log('Rollback not implemented. Good luck.');
};